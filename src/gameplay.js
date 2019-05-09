// This file contains most of the game logic

let mod1 = []
let mod2 = []
let mod3 = []
let mod4 = []
let currentPlayer = {}

function setUpGame() {
    

    player1.position = player1Positions.block10
    player1.positionid = 10
    player2.position = player2Positions.block10
    player2.positionid = 10
    currentPlayer = player1
    console.log('player1', player1)
    console.log('player2', player2)
    getQuestions()
    draw(player1)
    draw2(player2)
    player1Start()
}

function player1Start() {
    let main = document.querySelector('#action-section')
    main.innerHTML = ''
    let nextScreen = document.createElement('h3')
    nextScreen.innerText = `${currentPlayer.name} Ready?`
    let nxtBtn = document.createElement('button')
    nxtBtn.innerText = "Hit Me!"
    nxtBtn.addEventListener('click', ()=> gamePlay(currentPlayer))
    main.appendChild(nextScreen)
    main.appendChild(nxtBtn)
}

function getQuestions() {
    fetch('http://localhost:3000/api/v1/questions')
    .then(res => res.json())
    .then(questData => setupQuestions(questData))
}

function setupQuestions(questData) {
    mod1 = questData.filter(question => question.skill_id == 1);
    mod2 = questData.filter(question => question.skill_id == 2);
    mod3 = questData.filter(question => question.skill_id == 3);
    mod4 = questData.filter(question => question.skill_id == 4)
}

function getSkills() {
    fetch('http://localhost:3000/api/v1/skills')
    .then(res => res.json())
    .then(skills => console.log(skills))
}

function gamePlay(currentPlayer) {
    console.log('gameplay current player', currentPlayer)
    let currentPosition = currentPlayer.positionid
    console.log('currentPosition', currentPosition)
    switch (true) {
        case currentPosition < 14: askQuestion(mod1);
        break;
        case currentPosition = 14 : chanceCard();
        break;
        case currentPosition = 15 : codeChanllenge();
        break;
        case currentPosition > 15 && currentPosition < 19 : askQuestion(mod2);
        break;
        case currentPosition = 19 : chanceCard();
        break;
        case currentPosition = 20 : codeChallenge(mod2);
        break;
        case currentPosition > 20 && currentPosition < 24 : askQuestion(mod3);
        break;
        case currentPosition = 24 : chanceCard();
        break;
        case currentPosition = 25 : codeChallenge(mod3);
        break;
        case currentPosition > 25 && currentPosition < 28 : askQuestion(mod4);
        break;
        case currentPosition = 28 : chanceCard();
        break;
        case currentPosition = 29 : codeChallenge(mod4);
        break;
        default: document.write('Something is wrong!');

    }

}



function askQuestion(mod) {
    
    let explanation = document.querySelector('#action-section')
    explanation.innerHTML = ''
    let newline = document.createElement('br')
    let questionCard = document.getElementById("action-section")
    let questionSpace = document.createElement('div')
    questionSpace.className = "question-space"
    let answerSpace = document.createElement('form')
    answerSpace.className = "answer-space"
    answerSpace.addEventListener('submit', handleAnswer)
    let fieldSet = document.createElement('fieldset')
    answerSpace.appendChild(fieldSet)
    let p = document.createElement('p')
    p.className = "answers"
    let p2 = document.createElement('p')
    p2.className = "answer-button"


    questionCard.appendChild(questionSpace)
    questionCard.appendChild(answerSpace)

    let question = mod[Math.floor(Math.random() * mod.length)]
    console.log('questions', mod)
    questionSpace.innerText = `Question: ${question.content}`
    let answers = question.answers
    for (let key in answers) {
        if (answers.hasOwnProperty(key)) {
            let label = document.createElement('label')
            let choice = document.createElement('input')
            let newline = document.createElement('br')
            choice.type = "radio"
            choice.value = answers[key]
            choice.name = "answer-choice"
            label.innerText = key
            choice.dataset.key = key

            label.appendChild(choice)
            p.appendChild(newline)
            p.appendChild(label)
            fieldSet.appendChild(p)
        }
    }
    let submit = document.createElement('button')
    submit.innerText = "Submit"
    p2.appendChild(submit)
    fieldSet.appendChild(p2)
}

function handleAnswer (e) {
    e.preventDefault()
    let value = e.target.querySelector('input[name="answer-choice"]:checked').value
    let answer = e.target.querySelector('input[name="answer-choice"]:checked').dataset.key
    console.log(value)
    if (value == 10) {
        currentPlayer.score += 10
        displayScore()
        moveForward(currentPlayer);
      } else {
        draw(currentPlayer);
        nextUp();
      };
    //checks the answer to see if it is correct or not
    //will show alert message and notify the player if it is correct or not
    //if condition to determine if the answer chosen is correct or not by point value(10 or 0)
    //if correct, update points then call move function
    //else, it will just call move immediately
}


function codeChallenge(mod) {
    let explanation = document.querySelector('#action-section')
    explanation.innerHTML = ''
    let newline = document.createElement('br')
    let questionCard = document.getElementById("action-section")
    let questionSpace = document.createElement('div')
    questionSpace.className = "question-space"
    let answerSpace = document.createElement('form')
    answerSpace.className = "answer-space"
    answerSpace.addEventListener('submit', handleCC)
    let fieldSet = document.createElement('fieldset')
    answerSpace.appendChild(fieldSet)
    let p = document.createElement('p')
    p.className = "answers"
    let p2 = document.createElement('p')
    p2.className = "answer-button"


    questionCard.appendChild(questionSpace)
    questionCard.appendChild(answerSpace)

    let question = mod[Math.floor(Math.random() * mod.length)]
    console.log('questions', mod)
    questionSpace.innerText = `Question: ${question.content}`
    let answers = question.answers
    for (let key in answers) {
        if (answers.hasOwnProperty(key)) {
            let label = document.createElement('label')
            let choice = document.createElement('input')
            let newline = document.createElement('br')
            choice.type = "radio"
            choice.value = answers[key]
            choice.name = "answer-choice"
            label.innerText = key
            choice.dataset.key = key

            label.appendChild(choice)
            p.appendChild(newline)
            p.appendChild(label)
            fieldSet.appendChild(p)
        }
    }
    let submit = document.createElement('button')
    submit.innerText = "Submit"
    p2.appendChild(submit)
    fieldSet.appendChild(p2)
}

function handleCC() {
    switch(true) {
        case currentPlayer.score < 60: codeChallenge(mod1);
        break;
        case currentPlayer.score = 60: levelup(ruby);
        break;
        case currentPlayer.score > 60 && currentPlayer.score < 120: codeChallenge(mod2);
        break;
        case currentPlayer.score = 120: levelup(rails);
        break;
        case currentPlayer.score > 120 && currentPlayer.score < 180: codeChallenge(mod3);
        break;
        case currentPlayer.score = 180: levelup(javascript);
        break;
        case currentPlayer.score > 180 && currentPlayer.score < 240: codeChallenge(mod4);
        break;
        case currentPlayer.score = 240: winner();
        default: document.write("NO GOOD")
    }
}

function winner() {
    document.write("Kick ASS!!!! Now go get a job!!")
}

function levelup(language) {
    console.log("current player", currentPlayer.score)
    let resume = document.querySelector('#player-resume')
    resume.innerText `${currentPlayer.name}'s Resume`
    let skills = document.querySelector('#skill-list')
    let newSkill = document.createElement('li')
    newSkill.innerText = `${language}`
    skills.appendChild(newSkill)
}

function chanceCard() {
    let chanceNum = Math.floor(Math.random() * 6)
    



}


function displayScore () {
    let p1Score = document.querySelector('#player1-score')
    p1Score.innerText = player1.name + " " + player1.score
    
    let p2Score = document.querySelector('#player2-score')
    p2Score.innerText = player2.name + " " + player2.score
}