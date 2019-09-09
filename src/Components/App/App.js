//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from '../../BottomRow';
import HomeButtons from '../HomeButtons';
import AwayButtons from '../AwayButtons';
import HomeScore from '../HomeScore';
import AwayScore from '../AwayScore';
import Timer from '../Timer';

function App() {
  const HOME = 'home';

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [currentTime, setTime] = useState(1500);

  const touchDown = team =>
    team === HOME ? setHomeScore(homeScore + 7) : setAwayScore(awayScore + 7);
  const fieldGoal = team =>
    team === HOME ? setHomeScore(homeScore + 3) : setAwayScore(awayScore + 3);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeScore homeScore={homeScore} />
          <Timer currentTime={currentTime} setTime={setTime} />
          <AwayScore awayScore={awayScore} />
        </div>
        <BottomRow currentTime={currentTime} />
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
