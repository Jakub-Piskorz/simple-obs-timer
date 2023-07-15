import { useMemo } from 'react';

export interface anyObj {
  [key: string]: any;
}
export type ValueOf<T> = T[keyof T];

// Turns URL search params into injectable style property.
// Ex. /?height=123;width=234; => {height: '123', width: '234'}
const useCssParser = (): React.CSSProperties => {
  const styleProperties = useMemo(() => {
    let cssProps: anyObj = {};
    window.location.search
      .slice(1)
      .split(';')
      .forEach((str) => {
        let [key, value] = str.split('=') as [
          keyof React.CSSProperties,
          ValueOf<React.CSSProperties>
        ];
        if (key && value) {
          if (!isNaN(Number(value))) value = Number(value);
          if (typeof value === 'string') value = value.replaceAll('%20', ' ');
          cssProps[key] = value;
        }
      });
    console.log(cssProps);
    return cssProps as React.CSSProperties;
  }, []);

  return styleProperties;
};

export default useCssParser;
