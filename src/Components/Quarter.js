import React, { useState, useEffect } from 'react';
import './App/App.css';

const Quarter = props => {
  const [currentQuarter, changeCounter] = useState(1);
  const [disabled, disableButton] = useState(false);

  useEffect(() => {
    if (props.currentTime === 0 && currentQuarter <= 3)
      changeCounter(currentQuarter + 1);
  }, [props.currentTime, currentQuarter]);

  return (
    <div className="quarter">
      <h3 className="quarter__title">Quarter</h3>
      <div className="quarter__value">{currentQuarter}</div>

      <button
        className="awayButtons__fieldGoal"
        onClick={
          currentQuarter < 4
            ? () => changeCounter(currentQuarter + 1)
            : () => disableButton(true)
        }
        disabled={disabled}
      >
        Next Quarter
      </button>
    </div>
  );
};

export default Quarter;
