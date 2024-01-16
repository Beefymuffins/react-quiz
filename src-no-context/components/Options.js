/* eslint-disable no-nested-ternary */
import React from 'react';

const Options = ({ question, dispatch, answer }) => {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const colorAnswer =
          index === question.correctOption ? 'correct' : 'wrong';

        return (
          <button
            type="button"
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              hasAnswer ? colorAnswer : ''
            }`}
            key={option}
            disabled={hasAnswer}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
