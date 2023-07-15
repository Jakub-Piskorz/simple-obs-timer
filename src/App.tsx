import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import useCssParser from './utils/use-css-parser';

const App = () => {
  const cssFromUrl = useCssParser();

  // Initially, total amount of seconds from time in URL params.
  const [timer, setTimer] = useState<number | null>(() => {
    // Should be "const [hours, minutes, seconds] = ...", but TS cries for some reason
    const units = window.location.pathname
      .split('/')[1]
      .split(':')
      .map((value) => Number(value));
    // Detects minutes and seconds above 60.
    if (units[1] >= 60 || units[2] >= 60) return null;
    // Returns total seconds from url
    return units[0] * 60 * 60 + units[1] * 60 + units[2];
  });

  // Launches timer.
  useEffect(() => {
    const clock = setInterval(() => {
      setTimer((timer) => {
        if (!timer) {
          clearInterval(clock);
          return timer;
        }
        return timer - 1;
      });
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  // Turns 9 into '09'. Used to render hours, minutes, seconds.
  const padUnit = useCallback(
    (number: number) => String(number).padStart(2, '0'),
    []
  );

  // Renders 'h:mm:ss' or 'mm:ss' from seconds.
  const renderedTimer = useMemo(() => {
    if (timer === null) return 'Error';
    const hours = Math.floor(timer / 60 / 60) || '';
    const minutes = padUnit(Math.floor((timer / 60) % 60));
    const seconds = padUnit(Math.floor(timer % 60));
    return `${hours}${hours && ':'}${minutes}:${seconds}`;
  }, [timer]);

  return (
    <>
      <div className="timer-container" style={cssFromUrl}>
        {renderedTimer}
      </div>
    </>
  );
};

export default App;
