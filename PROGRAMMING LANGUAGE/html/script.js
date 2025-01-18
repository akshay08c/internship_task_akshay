const questions = [
    {
        question: "What is the output of the following code? print(type([]))",
        answers: [
            { text: "<class 'list'>", correct: true },
            { text: "<class 'dict'>", correct: false },
            { text: "<class 'tuple'>", correct: false },
            { text: "<class 'set'>", correct: false }
        ]
    },
    {
        question: "Which of the following is a mutable data type in Python?",
        answers: [
            { text: "Tuple", correct: false },
            { text: "String", correct: false },
            { text: "List", correct: true },
            { text: "Integer", correct: false }
        ]
    },
    {
        question: "What is the correct way to create a function in Python?",
        answers: [
            { text: "function myFunction() {}", correct: false },
            { text: "def myFunction():", correct: true },
            { text: "create myFunction()", correct: false },
            { text: "function: myFunction()", correct: false }
        ]
    },
 
    {
        question: "Which of the following is used to handle exceptions in Python?",
        answers: [
            { text: "try/except", correct: true },
            { text: "catch/throw", correct: false },
            { text: "error/handle", correct: false },
            { text: "except/try", correct: false }
        ]
    },
    {
        question: "What is the purpose of the self keyword in Python?",
        answers: [
            { text: "It refers to the class itself.", correct: false },
            { text: "It refers to the instance of the class.", correct: true },
            { text: "It is used to create a new instance.", correct: false },
            { text: "It is a built-in function.", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById('start-button');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const finalScoreElement = document.getElementById('final-score');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', () => {
    startButton.parentElement.style.display = 'none';
    quizContainer.style.display = 'block';
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-light');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    finalScoreElement.innerText = score + " out of " + questions.length;
}

resetButton.addEventListener('click', () => {
    scoreContainer.style.display = 'none';
    startButton.parentElement.style.display = 'block';
});