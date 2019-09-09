import React from 'react';
import './App/App.css';

const HomeScore = props => {
  return (
    <div className="home">
      <h2 className="home__name">Lions</h2>
      <div className="home__score">{props.homeScore}</div>
    </div>
  );
};

export default HomeScore;
