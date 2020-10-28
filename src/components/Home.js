import React, { useState } from 'react';
import Intro from './Intro';
import Game from './Game';
import Results from './Results';

const DISPLAY_HOME = 'home';
const DISPLAY_GAME = 'game';
const DISPLAY_RESULTS = 'results';

function Home() {
  const [content, setContent] = useState(DISPLAY_HOME);
  const [result, setResult] = useState(0);
  return (
    <div id="home">
      <div id="header">
        <h1 id="title">tandem trivia</h1>
      </div>
      <div>
        <div id="column-right">
          {content === DISPLAY_HOME && (
            <Intro setContent={() => setContent(DISPLAY_GAME)} />
          )}
          {content === DISPLAY_GAME && (
            <Game
              setContent={() => setContent(DISPLAY_RESULTS)}
              setResult={setResult}
            />
          )}
          {content === DISPLAY_RESULTS && (
            <Results
              result={result}
              setContent={() => setContent(DISPLAY_GAME)}
            />
          )}
        </div>
        <div id="column-right">
          <div id="circle-container">
            <div id="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
