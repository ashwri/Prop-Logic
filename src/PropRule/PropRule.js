import React from 'react';

//TODO: add an action listener: onClick
const propRule = (prop) => {
    return <button onClick={prop.ruleSelection}> {prop.rule} </button>
}

export default propRule;