import React, { useEffect, useState } from 'react';
import './App/App.css';
import Pad from '../Helpers/pad';

const Timer = props => {
  const [quarter, setQuarter] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      props.currentTime % 100 === 0
        ? props.setTime(props.currentTime - 41)
        : props.setTime(props.currentTime - 1);
    }, 1000);
    if (props.currentTime <= 0) {
      clearTimeout(timer);
      if (quarter <= 3) {
        setQuarter(quarter + 1);
        props.setTime(1500);
      }
    }
  });

  return (
    <div className="timer">
      {Pad(props.currentTime)
        .replace(/(..)/g, '$1:')
        .slice(0, -1)}
    </div>
  );
};

export default Timer;
