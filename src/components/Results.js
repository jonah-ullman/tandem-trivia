import React from 'react';

function Results({ result, setContent }) {
  const playCount = localStorage.getItem('playCount');
  const totalScore = localStorage.getItem('totalScore');
  const average = Math.round(totalScore / playCount);
  return (
    <div id="results">
      <h2>You answered {result} out of 10 questions correctly.</h2>
      <h3>You've played a total of {playCount} rounds.</h3>
      <h3>Your average score is {average}/10</h3>
      <button type="button" className="button" onClick={setContent}>
        Play Again?
      </button>
    </div>
  );
}

export default Results;
