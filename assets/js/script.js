let startButton = document.getElementById('start-btn-witcher');
let startButton2 = document.getElementById('start-btn-lotr');
let startButton3 = document.getElementById('start-btn-got');
let nextButton = document.getElementById('next-btn');
let homeButton = document.getElementById('home-btn');
let questionArea = document.getElementById('question-area');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let quizPage = document.getElementById('quiz-page');
let QWitchImage = document.getElementById('witcher-image');
let QLotrImage = document.getElementById('lotr-image');
let QGotImage = document.getElementById('got-image');
let scoreValue = document.getElementById('score');
let incorrectValue = document.getElementById('incorrect');

let questionlist, currentQuestionIndex;

/**
 * Utilising the different start buttons based on the start 
 * button ID's added in HTML. this triggers the start of
 * the correct quiz.
 */
if (startButton) {
    startButton.addEventListener('click', startQuizWitcher);
    startButton.addEventListener('click', setScoreToZero);

    nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});
}

if (startButton2) {
    startButton2.addEventListener('click', startQuizLotr);
    startButton2.addEventListener('click', setScoreToZero);

    nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});
}

if (startButton3) {
    startButton3.addEventListener('click', startQuizGot);
    startButton3.addEventListener('click', setScoreToZero);
    
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});
}

document.addEventListener("DOMContentLoaded", function() {
let quizlinks = document.querySelectorAll('.dropdown-link');

for (let quizlink of quizlinks) {
    quizlink.addEventListener('click', function() {
        console.log("Clicked link: ", this);
        let quizCategory = this.getAttribute('data-type');
        console.log("category",quizCategory);
        if (quizCategory === "witcher") {
            element.classList.add('correct');
        }
    });
}
});



/**
 * The Witcher start game loop. Hides the home and start button 
 * and starts the next question list. As an addition it also
 * logs to console which game is started.
 * src: Web Dev Simplified Youtube tutorial
 */
function startQuizWitcher() {
    let quizCategory = "Witcher";
    console.log(`Starting the ${quizCategory} Quiz`);
    homeButton.classList.add('hide');
    startButton.classList.add('hide');
    questionlist = questionsWitcher.sort(() => .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    nextQuestion();
}

/**
 * The Lord of the Rings start game loop. Hides the home 
 * and start button and starts the next question list. As 
 * an addition it also logs to console which game is started.
 */
function startQuizLotr() {
    let quizCategory = "Lotr";
    console.log(`Starting the ${quizCategory} Quiz`);
    homeButton.classList.add('hide');
    startButton2.classList.add('hide');
    questionlist = questionsLotr.sort(() => .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    nextQuestion();
}

/**
 * The Game of Thrones start game loop. Hides the home 
 * and start button and starts the next question list. As
 * an addition it also logs to console which game is started.
 */
function startQuizGot() {
    let quizCategory = "Got";
    console.log(`Starting the ${quizCategory} Quiz`);
    homeButton.classList.add('hide');
    startButton3.classList.add('hide');
    questionlist = questionsGot.sort(() => .5);
    currentQuestionIndex = 0;
    questionArea.classList.remove('hide');
    nextQuestion();
}

/**
 * Function to call the next question and reset the state
 * of the page to ensure previous answers are cleared.
 * src: Web Dev Simplified Youtube tutorial
 */
function nextQuestion() {
    resetState();
    showQuestion(questionlist[currentQuestionIndex]);
}

/**
 * Main function that calls the (next) question from the let Question
 * object and showcases it in the question field. It also creates the
 * buttons that are shown and populates these with the answer options.
 * When the correct answer is selected, a 'correct' class is added to 
 * the button which in turn is used for color coding in CSS.
 * Additionally it shows the image added for the next specific questions.
 * src: Web Dev Simplified Youtube tutorial
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
        question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add ('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    if (startButton) {
        QWitchImage.src = question.img;
    } else if (startButton2) {
        QLotrImage.src = question.img;
    } else if (startButton3) {
        QGotImage.src = question.img;
    }

}

/**
 * Clears elements back to a default state and removes the next button.
 * Deleting previous answers (clearing for new answers/question to be 
 * added.)
 * src: Web Dev Simplified Youtube tutorial
 */
function resetState() {
    clearStatusClass(quizPage);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Reads the button that is selected. Checks the answer with the question
 * object to see if the given answer matches with dataset correct (=true). 
 * Adding the correct status. Additionally it uses the current question 
 * list to loop to the next question depending on which quiz has started. 
 * At the end of each quiz if no questions are available anymore, the 
 * Restart and Home buttons are made visible. In the console it also 
 * confirms if a question is answered correct or wrong.
 * src: Web Dev Simplified Youtube tutorial
 */
function selectAnswer(event) {
    let selectedButton = event.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(quizPage, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
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
        console.log("Correct!");
        incrementScore();
    } else {
        console.log("wrong");
        incrementWrongAnswer();
    }

}

/**
 * clears the previous statuss (wrong/correct) where needed. Checks
 * what the new status of each answers is to define the new status 
 * of correct or wrong. It also adds starts the addDisabledClass function.
 * src: Web Dev Simplified Youtube tutorial
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
    addDisabledClass()
}

/**
 * Adds the disabled class to the buttons after an answer is provided.
 * This to ensure that no multiple answers can be given.
 */
function addDisabledClass() {
    answerButtonsElement.classList.add('disabled');
}

/**
 * function that removes existing classes correct/wrong.
 * It also removes the disabled class that deactivates buttons after
 * an answer was provided.
 * src: Web Dev Simplified Youtube tutorial
 */
function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
        answerButtonsElement.classList.remove('disabled');
} 

/**
 * src: Lovemath - counts the provided answer if correct and adds it 
 * to the the correct score counter.
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * src: Lovemath - counts the provided answer if wrong and adds it 
 * to the the incorrect score counter.
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

/**
 * resets the correct and wrong scores to zero at the start of the quiz and 
 * when a quiz is restarted.
 */
function setScoreToZero() {
    let score = 0;
    scoreValue.textContent = score;
    incorrectValue.textContent = score;
}


let questionsWitcher = [
    {
        question: 'What is the name of the author of the book series?',
        img: './assets/images/witcher-quiz/witcher-question-1.png',
        answers: [
            {text: 'Charles Dickens', correct:false},
            {text: 'Shakespeare', correct:false},
            {text: 'F. Scott Fitzgerald', correct:false},
            {text: 'Andrej Sapkowski', correct:true}
        ]

    },
    {
        question: 'Where was the series filmed?',
        img: './assets/images/witcher-quiz/witcher-question-2.png',
        answers: [
            {text: 'East Africa', correct:false},
            {text: 'Asia', correct:false},
            {text: 'Africa', correct:false},
            {text: 'Eastern Europe', correct:true}
        ]

    },
    {
        question: 'What is the role of Jodhi May in "The Witcher"?',
        img: './assets/images/witcher-quiz/witcher-question-3.png',
        answers: [
            {text: 'Queen Calanthe', correct:true},
            {text: 'Tissaia', correct:false},
            {text: 'Ciri', correct:false},
            {text: 'Yennefer', correct:false}
        ]

    },
    {
        question: 'Who is Gerald of Rivia?',
        img: './assets/images/witcher-quiz/witcher-question-4.png',
        answers: [
            {text: 'A witch', correct:false},
            {text: 'A monster Hunter', correct:true},
            {text: 'A Vampire', correct:false},
            {text: 'A Monster', correct:false}
        ]

    },
    {
        question: 'Who portrayed the role of Geralt of Rivia?',
        img: './assets/images/witcher-quiz/witcher-question-5.png',
        answers: [
            {text: 'Brad Pitt', correct:false},
            {text: 'Henry Cavill', correct:true},
            {text: 'Johnny Depp', correct:false},
            {text: 'Chris Hemsworth', correct:false}
        ]

    },
];
let questionsLotr = [
    {
        question: 'Who was the Ring bearer?',
        img: './assets/images/lotr-quiz/lotr-question-1.png',
        answers: [
            {text: 'Sam', correct:false},
            {text: 'Merry', correct:false},
            {text: 'Pippin', correct:false},
            {text: 'Frodo', correct:true}
        ]

    },
    {
        question: 'Who threw the ring into mount doom?',
        img: './assets/images/lotr-quiz/lotr-question-2.png',
        answers: [
            {text: 'Frodo', correct:false},
            {text: 'Sam', correct:false},
            {text: 'Gollum', correct:true},
            {text: 'Aragorn', correct:false}
        ]

    },
    {
        question: 'What is the name of Saruman his tower in Isengard?',
        img: './assets/images/lotr-quiz/lotr-question-3.png',
        answers: [
            {text: 'Strider', correct:true},
            {text: 'Boromir', correct:false},
            {text: 'Gandalf', correct:false},
            {text: 'Legolas', correct:false}
        ]

    },
    {
        question: 'Who do the hobbits encounter at the Prancing Pony?',
        img: './assets/images/lotr-quiz/lotr-question-4.png',
        answers: [
            {text: 'Marel', correct:false},
            {text: 'Mairon', correct:true},
            {text: 'Marrin', correct:false},
            {text: 'Savin', correct:false}
        ]

    },
    {
        question: 'Who or What are the Rohirrim?',
        img: './assets/images/lotr-quiz/lotr-question-5.png',
        answers: [
            {text: 'Elven Raiders', correct:false},
            {text: 'Riders of Rohan', correct:true},
            {text: 'Gondorian Knights', correct:false},
            {text: 'Dwarven miners', correct:false}
        ]

    },
];
let questionsGot = [
    {
        question: 'Who knew Nothing?',
        img: './assets/images/got-quiz/got-question-1.png',
        answers: [
            {text: 'John Snow', correct:true},
            {text: 'Ramsay Snow', correct:false},
            {text: 'Ellaria Sand', correct:false},
            {text: 'Missandei', correct:false}
        ]

    },
    {
        question: 'Khal Drogo belonged to which people?',
        img: './assets/images/got-quiz/got-question-2.png',
        answers: [
            {text: 'Westerosi', correct:false},
            {text: 'Wildlings', correct:false},
            {text: 'Valyrian', correct:false},
            {text: 'Dothraki', correct:true}
        ]

    },
    {
        question: 'What is said to order a dragon to breath fire?',
        img: './assets/images/got-quiz/got-question-3.png',
        answers: [
            {text: 'Dracarys', correct:true},
            {text: 'Drogon', correct:false},
            {text: 'Rhaegal', correct:false},
            {text: 'Viserion', correct:false}
        ]

    },
    {
        question: 'Who is the dragon queen?',
        img: './assets/images/got-quiz/got-question-4.png',
        answers: [
            {text: 'Yara Greyjoy', correct:false},
            {text: 'Daenerys Targaryen', correct:true},
            {text: 'Sansa Stark', correct:false},
            {text: 'Cersei Lannister', correct:false}
        ]

    },
    {
        question: 'Who lost his hand on the chopping block?',
        img: './assets/images/got-quiz/got-question-5.png',
        answers: [
            {text: 'Jorah Mormont', correct:false},
            {text: 'Jaime Lannister', correct:true},
            {text: 'Tyrion Lannister', correct:false},
            {text: 'Oberyn Martell', correct:false}
        ]

    },
];