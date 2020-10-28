import React from 'react';
import { shuffleArray } from '../../utils';

function Question({ question, submitAnswer }) {
  const allAnswers = [...question.incorrect, question.correct];
  const shuffledAnswers = shuffleArray(allAnswers);
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="answers">
        {shuffledAnswers.map((answer) => {
          const isCorrect =
            answer === question.correct ? 'correct' : 'incorrect';
          return (
            <button
              className="button answer"
              type="button"
              value={isCorrect}
              key={answer}
              onClick={submitAnswer}
            >
              <h3 className={isCorrect}>{answer}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
