let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let homeButton = document.getElementById('home-btn');
let questionArea = document.getElementById('question-area');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let quizPage = document.getElementById('quiz-page');

let questionlist, currentQuestionIndex 

document.addEventListener("DOMContentLoaded", function() {
let quizlinks = document.querySelectorAll('.dropdown-link');
console.log("those are quiz links",quizlinks)
for (let quizlink of quizlinks) {
    quizlink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Clicked link: ", this);
        let quizCategory = this.getAttribute('data-type');
        console.log("category  ",quizCategory);
        if (quizCategory === "witcher") {
            alert("You clicked the Witcher Quiz");
        } else {
            alert(`You clicked ${quizCategory}`);
        }
    });
}
})

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

/**
 * 
 */
function startQuiz() {
    console.log("Starting the quiz");
    homeButton.classList.add('hide');
    startButton.classList.add('hide');
    questionlist = questionsWitcher.sort(() => .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    nextQuestion()
}

/**
 * 
 */
function nextQuestion() {
    resetState()
    showQuestion(questionlist[currentQuestionIndex])
}

/**
 * 
 */
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add ('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    })
}

/**
 * 
 */
function resetState() {
    clearStatusClass(quizPage)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * 
 */
function selectAnswer(event) {
    let selectedButton = event.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(quizPage, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (questionlist.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        homeButton.classList.remove('hide');
    }

    if (correct) {
        console.log("Correct!")
        incrementScore();
    } else {
        console.log("wrong")
        incrementWrongAnswer();
    }

}

/**
 * 
 */
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

/**
 * 
 */
function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
} 

/**
 * 
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore
}

/**
 * 
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore
}

/**
 * 
 */
let questionsWitcher = [
    {
        question: 'What is the name of the author of the book series?',
        answers: [
            {text: 'Charles Dickens', correct:false},
            {text: 'Shakespeare', correct:false},
            {text: 'F. Scott Fitzgerald', correct:false},
            {text: 'Andrej Sapkowski', correct:true}
        ]

    },
    {
        question: 'Where was the series filmed?',
        answers: [
            {text: 'East Africa', correct:false},
            {text: 'Asia', correct:false},
            {text: 'Africa', correct:false},
            {text: 'Eastern Europe', correct:true}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        answers: [
            {text: 'Brad Pitt', correct:false},
            {text: 'Henry Cavill', correct:true},
            {text: 'Johnny Depp', correct:false},
            {text: 'Chris Hemsworth', correct:false}
        ]

    },
]
let questionsLotr = [
    {
        question: 'What is the name of the author of the book series?',
        answers: [
            {text: 'Charles Dickens', correct:false},
            {text: 'Shakespeare', correct:false},
            {text: 'F. Scott Fitzgerald', correct:false},
            {text: 'Andrej Sapkowski', correct:true}
        ]

    },
    {
        question: 'Where was the series filmed?',
        answers: [
            {text: 'East Africa', correct:false},
            {text: 'Asia', correct:false},
            {text: 'Africa', correct:false},
            {text: 'Eastern Europe', correct:true}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        answers: [
            {text: 'Brad Pitt', correct:false},
            {text: 'Henry Cavill', correct:true},
            {text: 'Johnny Depp', correct:false},
            {text: 'Chris Hemsworth', correct:false}
        ]

    },
]
let questionsGot = [
    {
        question: 'What is the name of the author of the book series?',
        answers: [
            {text: 'Charles Dickens', correct:false},
            {text: 'Shakespeare', correct:false},
            {text: 'F. Scott Fitzgerald', correct:false},
            {text: 'Andrej Sapkowski', correct:true}
        ]

    },
    {
        question: 'Where was the series filmed?',
        answers: [
            {text: 'East Africa', correct:false},
            {text: 'Asia', correct:false},
            {text: 'Africa', correct:false},
            {text: 'Eastern Europe', correct:true}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        answers: [
            {text: 'Brad Pitt', correct:false},
            {text: 'Henry Cavill', correct:true},
            {text: 'Johnny Depp', correct:false},
            {text: 'Chris Hemsworth', correct:false}
        ]

    },
]