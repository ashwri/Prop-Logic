import React, { Component } from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';

//TODO Phase 3: use a stack data structure so that you can go back oto last step

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
                this.setState({
                    nextSteps: this.state.nextSteps[i].nextPossibleSteps,
                    text: this.state.nextSteps[i].line
                });
                break;
            }
        }

        if (!found) {
            console.log("Uh-oh! Wrong choice");
        }
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

