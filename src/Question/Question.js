import React, { Component } from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';

//TODO Phase 1: Will recieve question data, save it in a structure.
//TODO Phase 1: Add style or js to make lines initially invisible. 
//We can pass a bool to line which will handle that
//TODO Phase 1: pass an onClickHandler method to Options
//TODO Phase 1: onClickHandler will receive an id(?) from the button clicked -- for now assume there is a way to know
// if the correct button was clicked, make the next line visible
//else, for now, console.log("wrong choice")
//TODO Phase 3: use a stack data structure so that you can go back oto last step

class Question extends Component {

    validRules = () => {
        let arr = [];
        for (var i = 0; i < this.props.nextSteps.length; i++) {
            arr = [...arr, ...this.props.nextSteps[i].rulesToGetThere];
        }
        return arr;
    }

    //TODO Final phase: Try to figure out why this doesn't work
    // validRules = () => this.props.nextSteps.map(steps => steps.rulesToGetThere); 

    state = {
        nextSteps: this.props.nextSteps,
        validRules: this.validRules(),
        text: this.props.text
    }
    //this.nextSteps.map((steps) => steps.rulesToGetThere);

    ruleSelectionHandler = (id, event) => {
        console.log(this.state.validRules);

        for (var i = 0; i < this.props.nextSteps.length; i++) {
            if (this.props.nextSteps[i].rulesToGetThere.includes(id)) {
                console.log("Hey! You chose the right button");
                this.lines = [...this.lines, this.props.nextSteps[i].line];
                console.log(this.lines);
                break;
            } else {
                console.log("Uh-oh! Wrong choice")
            }
        }
        //if (this.state.validRules.includes(id)) 

    }

    createLine = (lineText) => {
        return <Line text={lineText} />
    }

    //TODO Phase 2: Add keys to the createLine : needed for the map function
    createLines = (lines) => {
        return lines.map(this.createLine);
    }

    lines = [this.props.text];
    render() {
        console.log(this.props.text);
        console.log(this.props.nextSteps);
        return (
            <div>
                {this.createLines(this.lines)}
                <Options choiceSelection={this.ruleSelectionHandler} />
                <div> Start Over Icon </div>
                <div> Next Step </div>
                <div> Possible Soultions </div>
            </div>
        )
    }


}

export default Question;

