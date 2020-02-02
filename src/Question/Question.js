import React, { Component } from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';
import '../Question/Question.css';

//TODO Phase 3: use a stack data structure so that you can go back oto last step
//TODO Phase X: figure out how to fix the code giving a warning...
//TODO Phase X: Figure out a better way to implement that chunk of code.

class Question extends Component {
    //stack here..
    //add the state to the stack
    //add the state of createLine to the stack.. maybe I will have to create different variables to hold this value?
    //{nextSteps, text, lineText} //probably don't need the text since that will probably be in the lineText
    stateStack = [];


    state = {
        nextSteps: this.props.nextSteps,
        text: this.props.text
    };


    stackPush = () => {
        let currState = this.state;
        let text = this.lines;
        this.stateStack.push({ currState, text });
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

    //should this method actually give all the possible next steps instead of just choosing the first one?
    nextStepHandler = (event) => {
        if (this.state.nextSteps != null) { //if(this.state.nextSteps)
            this.updateLines(0);
            this.updateState(0);
        }
    }

    nextPossibleStepsHandler = (event) => {
        this.highlightPossibleSteps();
    }

    highlightPossibleSteps = () => {
        for (let i = 0; i < this.state.nextSteps.length; i++) {
            //TODO: highlight rule to be applied to get there
        }
    }

    backButtonHandler = (event) => {
        console.log("I am popping...", this.stateStack.pop());

        let info = this.stateStack.pop();
        console.log("I am also popping (new state)", info);
        // console.log(info);
        let newState = {
            nextSteps: info.currState.nextSteps,
            text: info.currState.text
        }
        this.setPrevState(newState);
        this.lines = info.text;
        //remove from stack
        //set the state to the values removed from the stack
        //set the lineText to the value from the stack
    }

    setPrevState = (newState) => {
        this.setState((props) => {
            return {
                nextSteps: newState.nextSteps,
                text: newState.text
            };

        });
    }



    possibleSolutionsHandler = (event) => {
        //get value at the bottom of the stack (original question and state)
        //
    }

    printPossibleSolutions = (info) => {
        //this will require some dynamic programming
        console.log(info);
        for (let i = 0; i < this.state.nextSteps.length; i++) {
            this.printPossibleSolutions(i);
        }
    }

    startOverHandler = (event) => {
        //set the items to the bottom of the stack;
    }

    createLine = (lineText) => {
        return <Line text={lineText} key={this.props.id + lineText} />
    }


    createLines = (lines) => {
        return lines.map(this.createLine);
    }


    render() {
        this.stackPush();
        console.log("The stack: ", this.stateStack);
        console.log("The current state: ", this.state);
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
                    <button onClick={this.backButtonHandler}> Last Step </button>
                    <button> Possible Soultions </button>
                </div>

            </div >

        )

    }


}

export default Question;

