import React from 'react';

function Intro({ setContent }) {
  return (
    <div id="home-content">
      <h2>No one likes to lose.</h2>
      <p id="intro-text">
        We've got you covered, though. Start training your skills with tandem
        trivia below.
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
