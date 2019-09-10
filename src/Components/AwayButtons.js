import React from 'react';
import './App/App.css';

const AwayButtons = props => {
  return (
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={props.touchDown}>
        Away Touchdown
      </button>
      <button className="awayButtons__fieldGoal" onClick={props.fieldGoal}>
        Away Field Goal
      </button>
    </div>
  );
};

export default AwayButtons;
