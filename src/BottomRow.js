import React from 'react';
import './Components/App/App.css';
import Quarter from './Components/Quarter';

const BottomRow = props => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <Quarter currentTime={props.currentTime} />
    </div>
  );
};

export default BottomRow;
