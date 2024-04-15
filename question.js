const question = document.getElementById("question");
const choices =  Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who First discovered Gravity?",
        choice1: "Albert Einstene",
        choice2: "Issac Newton",
        choice3: "Nikola Tesla",
        choice4: "Thomas Edison",
        answer: 2
    },
    {
        question: "What is the capital city of France?",
        choice1: "Rome",
        choice2: "Madrid",
        choice3: "Paris",
        choice4: "Berlin",
        answer: 3
    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'",
        choice1: "Ernest Hemingway",
        choice2: "Harper Lee",
        choice3: "F. Scott Fitzgerald",
        choice4: "J.K. Rowling",
        answer: 2
    },
]

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () =>{

    questionCounter++;
    const questionIndex =Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
 
}

startGame();

