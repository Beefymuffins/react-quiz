import React from 'react';
import { useQuiz } from '../contexts/QuizContext';

const NextButton = () => {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        type="button"
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        type="button"
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finished
      </button>
    );
};

export default NextButton;
