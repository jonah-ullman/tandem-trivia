import React from 'react';

function Home() {
  return (
    <div id="home">
      <div id="header">
        <h1 id="title">tandem trivia</h1>
      </div>
      <div id="home-content">
        <h2>No one likes to lose at trivia.</h2>
        <p id="intro-text">
          We've got you covered, though. Train your trivia skills with tandem
          trivia and you'll be the champion of the slack #games channel!
        </p>
      </div>
      <div id="start-button-container">
        <button id="start-button" type="button" className="button">
          Get Started
        </button>
      </div>
      <div id="footer">
        <div id="circle-container">
          <div id="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
