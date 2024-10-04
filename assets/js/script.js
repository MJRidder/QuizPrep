const startButton = document.getElementById("start-btn");
const questionArea = document.getElementById('question-area');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex 

startButton.addEventListener('click', StartQuiz);


function StartQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    NextQuestion()
}

function NextQuestion() {
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

function SelectAnswer() {

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