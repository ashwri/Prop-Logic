import React from 'react';
import './Line.css';
//TODO: 
//TODO: the type of line (question, step or answer will be passed as a prop) -- change the style based on this 
const line = (props) => {
    return <div className='line'> {props.text} </div>
}

export default line;