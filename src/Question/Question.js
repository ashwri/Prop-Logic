import React from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';

//TODO: Change to stateful component
//TODO: Will recieve question data, save it in a structure.
//TODO: Add style or js to make lines initially invisible. 
//We can pass a bool to line which will handle that
//TODO: pass an onClickHandler method to Options
//TODO: onClickHandler will receive an id(?) from the button clicked -- for now assume there is a way to know
// if the correct button was clicked, make the next line visible
//else, for now, console.log("wrong choice")

const question = () => {
    return (
        <div>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Options/>
            <div> Start Over Icon </div>
            <div> Next Step </div>
            <div> Possible Soultions </div>
        </div>
    )
}

export default question;

