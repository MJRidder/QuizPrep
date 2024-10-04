const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionArea = document.getElementById('question-area');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex 

startButton.addEventListener('click', StartQuiz);


function StartQuiz() {
    console.log("Starting the quiz");
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    NextQuestion()
}

function NextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add ('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', SelectAnswer);
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function SelectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    if (correct) {
        element.classList.remove('correct')
    } else {
        element.classList.remove('wrong')
    }
} 

const questions = [
    {
        question: 'What is twee plus twee?',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    }
]