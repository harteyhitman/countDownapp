import React, { useState } from "react";
import "./App.css";
import images from './pattern-hills.svg'

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="header">DAYS TO MY BIRTHDAY <b>AZEEZ OYEGOKE</b></h1>
        <Timer />
      </div>
    </div>
  );
};

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August, 18, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
      <div className="col-4">
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}</p>
        </div>
        <span className="text">Days <b>(Abisola)</b></span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
        <span className="text">Hours <b>(Mistura)</b></span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
        <span className="text">Minutes <b>(Kiki)</b></span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
        <span className="text">Seconds <b>(Oyegoke's)</b></span>
      </div> 
      <div className="bottom">
        <img src={images} alt="" />
      </div>
    </div>
  );
};

export default App;
