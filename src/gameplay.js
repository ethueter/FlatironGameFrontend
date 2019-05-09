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
    draw(player2)
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
    explanation.remove()

    let questionCard = document.getElementById("question-box")
    let questionSpace = document.createElement('div')
    questionSpace.className = "question-space"
    let answerSpace = document.createElement('div')
    answerSpace.className = "answer-space"

    questionCard.appendChild(questionSpace)
    questionCard.appendChild(answerSpace)

    let question = mod[Math.floor(Math.random() * mod.length)]
    console.log('questions', mod)
    questionSpace.innerText = question.content
    let answers = question.answers
    for (let key in answers) {
        if (answers.hasOwnProperty(key)) {
            let choice = document.createElement('li')
            choice.innerHTML = `<option value=${answers[key]}> ${key}</option>`
            choice.className = answers[key]
            answerSpace.appendChild(choice)
        }
    }
    
    answerSpace.addEventListener('click', handleAnswer)
        
}

function handleAnswer () {
    //checks the answer to see if it is correct or not
    //will show alert message and notify the player if it is correct or not
    //if condition to determine if the answer chosen is correct or not by point value(10 or 0)
    //if correct, update points then call move function
    //else, it will just call move immediately
}


function codeChallenge() {
    console.log('code challenge', mod1)
}