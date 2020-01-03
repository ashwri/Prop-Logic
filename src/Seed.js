const q1d = {
    id: "quest-1d",
    line: "question1 step 3",
    rulesToGetThere: ["id", "neg", "dneg"],
    nextPossibleSteps: null
};

const q1c = {
    id: "quest-1c",
    line: "question1 step 2",
    rulesToGetThere: ["dneg"],
    nextPossibleSteps: [q1d]
};

const q1a = {
    id: "quest-1a",
    line: "question1 step 1a",
    rulesToGetThere: ["id"],
    nextPossibleSteps: [q1c]
};

const q1b = {
    id: "quest-1b",
    line: "question1 step 1b",
    rulesToGetThere: ["neg"],
    nextPossibleSteps: [q1c]
};


// nextPossibleSteps will be an array. rulesToGetThere will most likely be an array with 1 string, except for answer
module.exports.questions = [
    {
        id: "quest-1",
        line: "question1",
        rulesToGetHere: null,
        nextPossibleSteps: [q1a, q1b]
    },
    {
        id: "quest-2",
        line: "question2",
        rulesToGetHere: null,
        nextPossibleSteps: null
    },
    {
        id: "quest-3",
        line: "question3",
        rulesToGetHere: null,
        nextPossibleSteps: [q1b]
    }

];
