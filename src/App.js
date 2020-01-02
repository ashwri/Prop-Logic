import React, { Component } from 'react';
import './App.css';
import Question from './Question/Question';
import Seed from './Seed.js';

//TODO: This component will be stateless.
//TODO Phase 2: Figure out a key for the data when it is being mapped
class App extends Component {

  questions = Seed.questions;

  render() {
    const questionComponents = this.questions.map((question) => (
      <Question
        text={question.line}
        nextSteps={question.nextPossibleSteps}
      />
    ));
    return (
      <div className="App">
        {questionComponents}
      </div>
    );
  }
}

export default App;
