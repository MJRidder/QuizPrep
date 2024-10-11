let startButton = document.getElementById('start-btn');
let startButton2 = document.getElementById('start-btn-lotr');
let startButton3 = document.getElementById('start-btn-got');
let nextButton = document.getElementById('next-btn');
let homeButton = document.getElementById('home-btn');
let questionArea = document.getElementById('question-area');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let quizPage = document.getElementById('quiz-page');
let QWitchImage = document.getElementById('witcher-image')
let QLotrImage = document.getElementById('lotr-image')
let QGotImage = document.getElementById('got-image')

let questionlist, currentQuestionIndex 
if (startButton) {
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
}

if (startButton2) {
    startButton2.addEventListener('click', startQuizLotr);
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
}

if (startButton3) {
    startButton3.addEventListener('click', startQuizGot);
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
}

document.addEventListener("DOMContentLoaded", function() {
let quizlinks = document.querySelectorAll('.dropdown-link');
console.log("those are quiz links",quizlinks)

for (let quizlink of quizlinks) {
    quizlink.addEventListener('click', function() {
        console.log("Clicked link: ", this);
        let quizCategory = this.getAttribute('data-type');
        console.log("category",quizCategory);
        if (quizCategory === "witcher") {
            alert("You clicked the Witcher Quiz");
            element.classList.add('correct');

        } else {
            alert(`You clicked ${quizCategory}`);
        }
    });
}
})



/**
 * 
 */
function startQuiz() {
    let quizCategory = "Witcher"
    console.log(`Starting the ${quizCategory} Quiz`);
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
function startQuizLotr() {
    let quizCategory = "Lotr"
    console.log(`Starting the ${quizCategory} Quiz`);
    console.log(QWitchImage)
    homeButton.classList.add('hide');
    startButton2.classList.add('hide');
    questionlist = questionsLotr.sort(() => .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    nextQuestion()
}

/**
 * 
 */
function startQuizGot() {
    let quizCategory = "Got"
    console.log(`Starting the ${quizCategory} Quiz`);
    homeButton.classList.add('hide');
    startButton3.classList.add('hide');
    questionlist = questionsGot.sort(() => .5);
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
    questionElement.innerText = question.question;
        question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add ('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
        console.log (question)
    })
    QWitchImage.src = question.img;
    QLotrImage.src = question.img;
    QGotImage.src = question.img;
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
    } else if (startButton) {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        homeButton.classList.remove('hide');
    } else if (startButton2) {
        startButton2.innerText = 'Restart';
        startButton2.classList.remove('hide');
        homeButton.classList.remove('hide');
    } else if (startButton3) {
        startButton3.innerText = 'Restart';
        startButton3.classList.remove('hide');
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
        img: './assets/Images/witcher-quiz/witcher-mobile-cropped.jpg',
        answers: [
            {text: 'Charles Dickens', correct:false},
            {text: 'Shakespeare', correct:false},
            {text: 'F. Scott Fitzgerald', correct:false},
            {text: 'Andrej Sapkowski', correct:true}
        ]

    },
    {
        question: 'Where was the series filmed?',
        img: './assets/Images/witcher-quiz/witcher-mobile-cropped2.jpg',
        answers: [
            {text: 'East Africa', correct:false},
            {text: 'Asia', correct:false},
            {text: 'Africa', correct:false},
            {text: 'Eastern Europe', correct:true}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        img: './assets/Images/witcher-quiz/witcher-front-image.jpg',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        img: './assets/Images/witcher-quiz/witcher-mobile.webp',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        img: './assets/Images/witcher-quiz/witcher-sad.webp',
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
        question: 'Who was the Ring bearer?',
        img: './assets/Images/lotr-hero.jpg',
        answers: [
            {text: 'Sam', correct:false},
            {text: 'Merry', correct:false},
            {text: 'Pippin', correct:false},
            {text: 'Frodo', correct:true}
        ]

    },
    {
        question: 'Who threw the ring into mount doom?',
        img: './assets/Images/lotr-hero.jpg',
        answers: [
            {text: 'Frodo', correct:false},
            {text: 'Sam', correct:false},
            {text: 'Gollum', correct:true},
            {text: 'Aragorn', correct:false}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        img: './assets/Images/lotr-hero.jpg',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        img: './assets/Images/lotr-hero.jpg',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        img: './assets/Images/lotr-hero.jpg',
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
        question: 'Who is the dragon queen?',
        img: './assets/Images/got-hero.avif',
        answers: [
            {text: 'Daenerys Targaryen', correct:true},
            {text: 'Yara Greyjoy', correct:false},
            {text: 'Sansa Stark', correct:false},
            {text: 'Cersei Lannister', correct:false}
        ]

    },
    {
        question: 'Where was the series filmed?',
        img: './assets/Images/got-hero.avif',
        answers: [
            {text: 'East Africa', correct:false},
            {text: 'Asia', correct:false},
            {text: 'Africa', correct:false},
            {text: 'Eastern Europe', correct:true}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        img: './assets/Images/got-hero.avif',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        img: './assets/Images/got-hero.avif',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        img: './assets/Images/got-hero.avif',
        answers: [
            {text: 'Brad Pitt', correct:false},
            {text: 'Henry Cavill', correct:true},
            {text: 'Johnny Depp', correct:false},
            {text: 'Chris Hemsworth', correct:false}
        ]

    },
]