let beginQuiz = document.getElementById("#begin-quiz");
let intro = document.getElementById("#intro");
let questions = document.getElementById("#questions");




function startQuiz() {
    intro.classList.add("hide")
    questions.classList.remove("hide")
}

var questionArr = [
    {
        question: "Commonly used data types do not include?",
        answerChoices: [
            {
                 choices: "stings", answer: true },
                {choices: "boleans", answer: false },
                {choices: "alerts", answer: false},
                {choices: "numbers", answer: false }
        ]
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables?",
        answerChoices: [
            {
                 choices: "commas", answer: false },
                {choices: "curly brackets", answer: false },
                {choices: "quotes", answer: true},
                {choices: "parethesis", answer: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _________",
        answerChoices: [
            {
                 choices: "nuumbers and strings", answer: false },
                {choices: "other arrays", answer: false },
                {choices: "booleans", answer: false},
                {choices: "all of the above", answer: true }
        ]
    },
    {
        question: "The condition in and if / else statement is enclosed with ________?",
        answerChoices: [
            {
                 choices: "quotes", answer: false},
                {choices: "curly brackets", answer: false },
                {choices: "parethesis", answer: true},
                {choices: "square brackets", answer: false  }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answerChoices: [
            {
                 choices: "JavaScript", answer: false },
                {choices: "terminal/bash", answer: false },
                {choices: "for loops", answer: false},
                {choices: "console.log", answer: true }
        ]
    }
]

beginQuiz.addEventListener("click", startQuiz())