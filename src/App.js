import React, {Component} from 'react';
import './App.css';
import Question from './Question/Question';

//TODO: Create a file to store the questions which will be imported in here 
//TODO: Extract the data from the file and pass them to question component
//TODO: Info to pass: question, steps, rules to apply the steps
//Will need to pass an array or nested array. Can we do this?
//TODO: This component will be stateless.

class App extends Component {
  render(){
    return (
      <div className="App">
         <Question></Question>
         <Question />
      </div>
    );
  }
}

export default App;
