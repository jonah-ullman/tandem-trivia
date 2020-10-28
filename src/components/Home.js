import React, { useState } from 'react';
import Intro from './Intro';
import Game from './Game';

const DISPLAY_HOME = 'home';
const DISPLAY_GAME = 'game';
const DISPLAY_RESULTS = 'results';

function Home() {
  const [content, setContent] = useState(DISPLAY_HOME);
  return (
    <div id="home">
      <div id="header">
        <h1 id="title">tandem trivia</h1>
      </div>
      {content === DISPLAY_HOME && (
        <Intro setContent={() => setContent(DISPLAY_GAME)} />
      )}
      {content === DISPLAY_GAME && (
        <Game setContent={() => setContent(DISPLAY_RESULTS)} />
      )}
      {content === DISPLAY_RESULTS && <div>RESULTS</div>}
      <div id="footer">
        <div id="circle-container">
          <div id="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
