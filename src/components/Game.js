import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { shuffleQuestions } from '../../utils';
import Question from './Question';

function Game({ setContent, setResult }) {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loadedQuestions, setLoadedQuestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setQuestions(shuffleQuestions(data));
    setLoadedQuestions(true);
  }, []);

  const submitAnswer = (event) => {
    const correct = event.currentTarget.value === 'correct';
    setSubmitted(true);
    if (correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSubmitted(false);
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setResult(score);
        setContent();
      }
    }, 1500);
  };

  return (
    <div id="game">
      <h2>Your score: {score}/10</h2>
      {loadedQuestions && (
        <Question
          submitAnswer={submitAnswer}
          question={questions[currentQuestionIndex]}
          submitted={submitted}
        />
      )}
    </div>
  );
}

export default Game;
