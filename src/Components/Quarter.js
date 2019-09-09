import React, { useState } from 'react';
import './App/App.css';

const Quarter = () => {
  const [currentQuarter, changeCounter] = useState(0);
  const [disabled, disableButton] = useState(false);

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
