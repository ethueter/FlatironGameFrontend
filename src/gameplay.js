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
    gamePlay(currentPlayer)
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
    switch (currentPosition) {
        case currentPosition < 4 : askQuestion(mod1);
        break;
        case currentPosition = 4 : chanceCard();
        break;
        case currentPosition = 5 : codeChanllenge(mod1);
        break;
        case currentPosition > 5 && currentPosition < 9 : askQuestion(mod2);
        break;
        case currentPosition = 9 : chanceCard();
        break;
        case currentPosition = 10 : codeChallenge(mod2);
        break;
        case currentPosition > 10 && currentPosition < 14 : askQuestion(mod3);
        break;
        case currentPosition = 14 : chanceCard();
        break;
        case currentPosition = 15 : codeChallenge(mod3);
        break;
        case currentPosition > 15 && currentPosition < 18 : askQuestion(mod4);
        break;
        case currentPosition = 18 : chanceCard();
        break;
        case currentPosition = 19 : codeChallenge(mod4);
        break;
        default: document.write('Something is wrong!');

    }

}

function checkMod () {
    accuSkills = current_player.skills
    let maxSkill = Math.max(...accuSkills)
    return `mod${maxSkill}`
}

function askQuestion() {
    let mod = checkMod()
    let questionCard = document.querySelector('#center-card')
    let question = {}
    let questionSpace = document.querySelector('#question-content')
    let answerSpace = document.querySelector('#answers')
    if (mod == mod1) {
        question = mod1[Math.floor(Math.random() * mod1.length)],
        questionSpace.innerText = question.content,
        answerSpace.innerHTML = `
            <option value=${question.answers[0].key}>A. ${question.answers[0]}</option>
            <option value=${question.answers[1].key}>B. ${question.answers[1]}</option>
            <option value=${question.answers[2].key}>C. ${question.answers[2]}</option>
        `,
        answerSpace.addEventListener('click', handleAnswer)
        
    }
}

function checkAnswer () {
    //checks the answer to see if it is correct or not
    //will show alert message and notify the player if it is correct or not
    //if condition to determine if the answer chosen is correct or not by point value(10 or 0)
    //if correct, update points then call move function
    //else, it will just call move immediately
}

function codeChallenge(currentPlayer) 