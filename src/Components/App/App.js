//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from '../../BottomRow';
import HomeButtons from '../HomeButtons';
import AwayButtons from '../AwayButtons';
import HomeScore from '../HomeScore';
import AwayScore from '../AwayScore';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const touchDownHome = () => setHomeScore(homeScore + 7);
  const fieldGoalHome = () => setHomeScore(homeScore + 3);

  const touchDownAway = () => setAwayScore(awayScore + 7);
  const fieldGoalAway = () => setAwayScore(awayScore + 3);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeScore homeScore={homeScore} />
          <div className="timer">00:03</div>
          <AwayScore awayScore={awayScore} />
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        <HomeButtons touchDown={touchDownHome} fieldGoal={fieldGoalHome} />
        <AwayButtons touchDown={touchDownAway} fieldGoal={fieldGoalAway} />
      </section>
    </div>
  );
}

export default App;
