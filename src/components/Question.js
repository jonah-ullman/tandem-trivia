import React, { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils';

function Question({ question, submitAnswer, submitted }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const allAnswers = [...question.incorrect, question.correct];
    const shuffledAnswers = shuffleArray(allAnswers);
    setAnswers(shuffledAnswers);
  }, [question]);

  return (
    <div className="question">
      <h2 className="question-header">{question.question}</h2>
      <div className="answers">
        {answers.map((answer) => {
          const isCorrect =
            answer === question.correct ? 'correct' : 'incorrect';
          return (
            <button
              className={`button answer ${
                submitted && 'submitted'
              } ${isCorrect}`}
              type="button"
              value={isCorrect}
              key={answer}
              onClick={submitAnswer}
              disabled={submitted}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
