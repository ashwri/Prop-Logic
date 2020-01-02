import React, {Component} from 'react';
import './App.css';
import Question from './Question/Question';
// import Seed from './Seed'

//TODO: Extract the data from the file and pass them to question component
//TODO: Info to pass: question, steps, rules to apply the steps
//Will need to pass an array or nested array. Can we do this?
//TODO: This component will be stateless.

class App extends Component {
  questions = [
        {
            line: "question1",
            rulesToGetHere: null,
            nextPOssibleSteps: "no steps"
        },
        {
            line: "question2",
            rulesToGetHere: null,
            nextPOssibleSteps: "no steps"  
        },
        {
            line: "question3",
            rulesToGetHere: null,
            nextPOssibleSteps: "no steps"
        }
       ]
    

  render(){
    const questionComponents = this.questions.map((question) => (
      <Question
       text = {question.line}
       nextSteps = {question.nextSteps}
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
