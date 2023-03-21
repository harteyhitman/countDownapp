import React, { useState, useEffect } from "react";
import "./App.css";
import images from "./pattern-hills.svg";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="header">BIRTHDAY COUNTDOWN</h1>
        <Timer />
      </div>
    </div>
  );
};

const Timer = () => {
  const [deadline, setDeadline] = useState('18 August 2023')
  const [name, setname] = useState('');
  const [Months, setmonth] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

 
//  console.log(name)
//  2023-03-30
// console.log(Date.parse('2023-03-30'), 'parsing')
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    // console.log(time, 'time')
    setmonth(Math.floor(time / (1000 * 60 * 60 * 24 * 31 )));
    setWeeks(Math.floor(time / (1000 * 60 * 60 * 24 * 7)));
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  const handleChange = (e) => {
    setname(e.target.value); 
    setDeadline(e.target.value) 

    };
useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="timer" role="timer">
      <form action="">
        <input
          onChange={handleChange}
          type="date"
          placeholder="put your date here"
        />
      </form>

      <div className="col-4">
        <div className="box">
          <p id="Months">{Months < 10 ? "0" + Months : Months}</p>
        </div>
        <span className="text">Months</span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="weeks">{weeks < 10 ? "0" + weeks : weeks}</p>
        </div>
        <span className="text">weeks</span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}</p>
        </div>
        <span className="text">Days</span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
        <span className="text">Hours</span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
        <span className="text">Minutes</span>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
        <span className="text">Seconds </span>
      </div>
      <h1 className="showtime">{name}</h1>
      <div className="bottom">
        <img src={images} alt="" />
      </div>
    </div>
  );
};

export default App;
