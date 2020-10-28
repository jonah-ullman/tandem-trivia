import React from 'react';

function Intro({ setContent }) {
  return (
    <div id="home-content">
      <h2>No one likes to lose at trivia.</h2>
      <p id="intro-text">
        We've got you covered, though. Train your trivia skills with tandem
        trivia and you'll be the champion of the slack #games channel!
      </p>
      <div id="start-button-container">
        <button
          id="start-button"
          type="button"
          className="button"
          onClick={setContent}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;
