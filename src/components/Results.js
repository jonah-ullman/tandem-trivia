import React from 'react';

function Results({ result, setContent }) {
  return (
    <div id="results">
      <h2>You answered {result} out of 10 questions correctly.</h2>
      <button type="button" className="button" onClick={setContent}>
        Play Again?
      </button>
    </div>
  );
}

export default Results;
