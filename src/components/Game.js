import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { shuffleQuestions } from '../../utils';
import Question from './Question';

function Game({ setContent }) {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loadedQuestions, setLoadedQuestions] = useState(false);

  useEffect(() => {
    setQuestions(shuffleQuestions(data));
    console.log(questions);
    setLoadedQuestions(true);
  }, []);

  const submitAnswer = (event) => {
    const correct = event.currentTarget.value === 'correct';
    if (correct) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setContent();
    }
  };

  console.log(questions);
  return (
    <div id="game">
      <h2>Your score: {score}/10</h2>
      {loadedQuestions && (
        <Question
          submitAnswer={submitAnswer}
          question={questions[currentQuestionIndex]}
        />
      )}
    </div>
  );
}

export default Game;
