import React, { Component } from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';

//TODO Phase 3: use a stack data structure so that you can go back oto last step
//TODO Phase X: figure out how to fix the code giving a warning...
//TODO Phase X: Figure out a better way to implement that chunk of code.

class Question extends Component {

    state = {
        nextSteps: this.props.nextSteps,
        text: this.props.text
    }

    ruleSelectionHandler = (id, event) => {
        let found = false;

        if (this.state.nextSteps === null) {
            return;
        }

        for (var i = 0; i < this.state.nextSteps.length; i++) {
            if (this.state.nextSteps[i].rulesToGetThere.includes(id)) {
                found = true;
                this.lines = [...this.lines, this.state.nextSteps[i].line];
                this.setState((prevState, props) => {
                    return {
                        nextSteps: prevState.nextSteps[i].nextPossibleSteps,
                        text: prevState.nextSteps[i].line
                    };

                });
                break;
            }
        }

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

    lines = [this.props.text];
    render() {
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

