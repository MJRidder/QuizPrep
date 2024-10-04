let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionArea = document.getElementById('question-area');
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let quizPage = document.getElementById('quiz-page')

let Questionlist, currentQuestionIndex 

startButton.addEventListener('click', StartQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    NextQuestion()
})


function StartQuiz() {
    console.log("Starting the quiz");
    startButton.classList.add('hide');
    Questionlist = questions.sort(() => .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    NextQuestion()
}

function NextQuestion() {
    resetState()
    showQuestion(Questionlist[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button');
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
    clearStatusClass(quizPage)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function SelectAnswer(event) {
    let selectedButton = event.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(quizPage, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (Questionlist.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

    if (correct) {
        console.log("Correct!")
        incrementScore();
    } else {
        console.log("wrong")
        incrementWrongAnswer();
    }

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
        element.classList.remove('correct')
        element.classList.remove('wrong')
} 

function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore
}

let questions = [
    {
        question: 'What is twee plus twee?',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    },
    {
        question: 'What is drie plus drie?',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    },
    {
        question: 'What is vier plus vier?',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    },
    {
        question: 'What is vijf plus vijf?',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    },
    {
        question: 'What is een plus een?',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    },
]