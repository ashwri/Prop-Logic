module.exports.questions = [
    {
        line: "question1",
        rulesToGetHere: null,
        nextPossibleSteps: "no steps"
    },
    {
        line: "question2",
        rulesToGetHere: null,
        nextPossibleSteps: "no steps"  
    },
    {
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

