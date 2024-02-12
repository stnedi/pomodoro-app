import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const initialSeconds = 1500; // 25 minutes in seconds
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null); // Create a ref to store the interval id

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current); // Clear interval on unmount or when the component re-renders
  }, [isActive, seconds]);

  function resetTimer() {
    clearInterval(intervalRef.current); // Use the interval stored in the ref
    setIsActive(false); // Stops the timer
    setSeconds(initialSeconds); // Resets the timer to 25 minutes
  }

  return (
    <div>
      <div>Time: {new Date(seconds * 1000).toISOString().substr(14, 5)}</div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
