import React, { useState, useEffect } from "react";
import "./stopwatch.css";
const StopwatchApp = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  //lab handler
  const lapHandler = () => {
    setLapTimes([...lapTimes, time]);
  };

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    const pad = (num) => (num < 10 ? '0' + num : num);

    return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <ul>
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
        ))}
      </ul>
{minutes==1?
<h1>
    Defar
    </h1>
    :''}

      <div className="stopwatch-buttons">
        <button className={`${isRunning?'start':'stop'}`} onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
        <button className="stopwatch-button" onClick={lapHandler} disabled={!isRunning}>
        Lap
      </button>
      </div>
    </div>
  );
};

export default StopwatchApp;