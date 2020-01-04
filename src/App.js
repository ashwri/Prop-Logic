import React from 'react';
import './App.css';
import Question from './Question/Question';
import Seed from './Seed.js';

const questions = Seed.questions;

const App = () => {

  const questionComponents = questions.map((question) => (
    <Question
      text={question.line}
      nextSteps={question.nextPossibleSteps}
      key={question.id}
      id={question.id}
    />
  ));
  return (
    <div className="App">
      {questionComponents}
    </div>
  );
}


export default App;
