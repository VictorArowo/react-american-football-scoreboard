import React from 'react';
import './App/App.css';

const HomeButtons = props => {
  return (
    <div className="homeButtons">
      <button className="homeButtons__touchdown" onClick={props.touchDown}>
        Home Touchdown
      </button>

      <button className="homeButtons__fieldGoal" onClick={props.fieldGoal}>
        Home Field Goal
      </button>
    </div>
  );
};

export default HomeButtons;
