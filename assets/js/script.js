const startButton = document.getElementById("start-btn");
const questionArea = document.getElementById('question-area');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const shuffleQuestions, currentQuestionIndex 

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
    showQuestion(shufflecQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.questions
}

function SelectAnswer() {

}

const questions = [
    {
        question: 'What is twee plus twee',
        answers: [
            {text: 'vier', correct:true},
            {text: 'acht', correct:false},
        ]

    }
]