import React from 'react';
import Options from '../Options/Options.js';
import Line from '../Line/Line.js';

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

