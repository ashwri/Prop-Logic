//TODO Phase 2: figure out a key for this data

const q1a = {
    line: "question1 step 1",
    rulesToGetThere: [1,2,5],
    nextPossibleSteps: "none"
};

module.exports.questions = [
    {   
        id: "quest-1",
        line: "question1",
        rulesToGetHere: null,
        nextPossibleSteps: q1a
    },
    {
        id: "quest-2",
        line: "question2",
        rulesToGetHere: null,
        nextPossibleSteps: "no steps"  
    },
    {
        id: "quest-3",
        line: "question3",
        rulesToGetHere: null,
        nextPossibleSteps: "no steps"
    }
   ];


// const Questions = list of steps

//Object step = new Object(line, rulesToGetHere, nextPossibleSteps)
//step representing the starting point will be: {line, null, nextPOssibleSteps}
//step representing the answer will be: {line, rulesToGetHere, null}
//string line = ''
//array nextPossibleSteps = array of steps
//rulesToGetHere = array or list of rules
//id: (possibilities: question number and sub step.. this way I can compute the id to use?).. idk yet

