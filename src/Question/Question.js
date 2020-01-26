import React, { Component } from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';
import '../Question/Question.css';

//TODO Phase 3: use a stack data structure so that you can go back oto last step
//TODO Phase X: figure out how to fix the code giving a warning...
//TODO Phase X: Figure out a better way to implement that chunk of code.

class Question extends Component {

    state = {
        nextSteps: this.props.nextSteps,
        text: this.props.text
    }

    lines = [this.props.text];

    updateLines = (i) => {
        this.lines = [...this.lines, this.state.nextSteps[i].line];
    }

    updateState = (i) => {
        this.setState((prevState, props) => {
            return {
                nextSteps: prevState.nextSteps[i].nextPossibleSteps,
                text: prevState.nextSteps[i].line
            };

        });
    }

    nextStepCheck = (id) => {
        for (let i = 0; i < this.state.nextSteps.length; i++) {
            if (this.state.nextSteps[i].rulesToGetThere.includes(id)) {
                this.updateLines(i);
                this.updateState(i);
                return true;
            }
        }
        return false;

    }

    ruleSelectionHandler = (id, event) => {
        let found = false;
        if (this.state.nextSteps === null) {
            return;
        }
        found = this.nextStepCheck(id);
        if (!found) {
            console.log("Uh-oh! Wrong choice");
        }
    }


    createLine = (lineText) => {
        return <Line text={lineText} key={this.props.id + lineText} />
    }


    createLines = (lines) => {
        return lines.map(this.createLine);
    }


    render() {
        return (
            <div>
                <div className="grid-container">
                    <div>
                        {this.createLines(this.lines)}
                    </div>
                    <Options choiceSelection={this.ruleSelectionHandler} />
                </div>
                <div>
                    <button> Start Over Icon </button>
                    <button> Next Step </button>
                    <button> Possible Soultions </button>
                </div>

            </div>

        )
    }


}

export default Question;

