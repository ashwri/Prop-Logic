import React, {Component} from 'react';
import './App.css';
import Question from './Question/Question';

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
