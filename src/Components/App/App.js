//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from '../../BottomRow';
import HomeButtons from '../HomeButtons';
import AwayButtons from '../AwayButtons';
import HomeScore from '../HomeScore';
import AwayScore from '../AwayScore';

function App() {
  const HOME = 'home';
  const AWAY = 'away';

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const touchDown = team =>
    team === HOME ? setHomeScore(homeScore + 7) : setAwayScore(awayScore + 7);
  const fieldGoal = team =>
    team === HOME ? setHomeScore(homeScore + 3) : setAwayScore(awayScore + 3);

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
        <HomeButtons
          touchDown={() => touchDown('home')}
          fieldGoal={() => fieldGoal('home')}
        />
        <AwayButtons
          touchDown={() => touchDown('away')}
          fieldGoal={() => fieldGoal('away')}
        />
      </section>
    </div>
  );
}

export default App;
