import React from 'react';

//TODO: add an action listener: onClick
const propRule = (prop) => {
    return <button onClick={prop.ruleSelection.bind(this,prop.id)}> {prop.rule} </button>
}

export default propRule;