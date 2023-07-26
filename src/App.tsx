import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import useCssParser from './utils/use-css-parser';
import DameDaNe from './assets/dame.mp3';

const App = () => {
  const cssFromUrl = useCssParser();

  // Initially, total amount of seconds from time in URL params.
  const [secondsLeft, setSecondsLeft] = useState<number | null>(() => {
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
  const sound = useMemo(() => {
    const _sound = new Audio(DameDaNe);
    _sound.setAttribute('loop', 'true');
    return _sound;
  }, []);
  const [paused, setPaused] = useState(false);

  // Launches timer.
  useEffect(() => {
    const clock = setTimeout(() => {
      setSecondsLeft((secondsLeft) => {
        if (!paused && secondsLeft && secondsLeft > 0) {
          return secondsLeft - 1;
        } else {
          return secondsLeft;
        }
      });
      clearTimeout(clock);
    }, 1000);

    if (!secondsLeft) {
      sound.play();
    }

    return () => clearTimeout(clock);
  }, [secondsLeft, paused]);

  // Turns 9 into '09'. Used to render hours, minutes, seconds.
  const padUnit = useCallback(
    (number: number) => String(number).padStart(2, '0'),
    []
  );

  // Renders 'h:mm:ss' or 'mm:ss' from seconds.
  const renderedTimer = useMemo(() => {
    if (secondsLeft === null) return 'Error';
    const hours = Math.floor(secondsLeft / 60 / 60) || '';
    const minutes = padUnit(Math.floor((secondsLeft / 60) % 60));
    const seconds = padUnit(Math.floor(secondsLeft % 60));
    return `${hours}${hours && ':'}${minutes}:${seconds}`;
  }, [secondsLeft]);

  return (
    <>
      <div className="timer-container" style={cssFromUrl}>
        {renderedTimer}
      </div>
      <button onClick={() => setPaused(!paused)}>
        {paused ? 'Pause' : 'Run'}
      </button>
    </>
  );
};

export default App;
