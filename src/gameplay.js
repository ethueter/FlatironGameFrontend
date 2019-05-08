// This file contains most of the game logic

let mod1 = []
let mod2 = []
let mod3 = []
let mod4 = []

function getQuestions() {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(questData => setupQuestions(questData))
}

function setupQuestions(questData) {
    mod1 = questData.filter(question => question.mod == mod1);
    mod2 = questData.filter(question => question.mod == mod2);
    mod3 = questData.filter(question => question.mod == mod3);
    mod4 = questData.filter(question => question.mod == mod4)
}

function getSkills() {
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then(skills => console.log(skills))
}

function gamePlay(currentPlayer) {
    let position = currentPlayer.position
    switch (position) {
        case position < 4 : askQuestion(mod1);
        break;
        case position = 4 : chanceCard();
        break;
        case position = 5 : codeChanllenge(mod1);
        break;
        case position > 5 && position < 9 : askQuestion(mod2);
        break;
        case position = 9 : chanceCard();
        break;
        case position = 10 : codeChallenge(mod2);
        break;
        case position > 10 && position < 14 : askQuestion(mod3);
        break;
        case position = 14 : chanceCard();
        break;
        case position = 15 : codeChallenge(mod3);
        break;
        case position > 15 && position < 18 : askQuestion(mod4);
        break;
        case position = 18 : chanceCard();
        break;
        case position = 19 : codeChallenge(mod4);
        break;
        default: document.write('Something is wrong!');

    }

}

function askQuestion(mod) {
    let questionCard = document.querySelector('#center-card')
    let question = {}
    let questionSpace = document.querySelector('#question-content')
    let answerSpace = document.querySelector('#answers')
    if (mod == mod1) {
        question = mod1[Math.floor(Math.random() * mod1.length)],
        questionSpace.innerText = question.content,
        answerSpace.innerHTML = `
            <option value=${question.answers[0].key}>A. ${question.answers[0]}</option>
            <option value=${question.answers[1].key}>A. ${question.answers[1]}</option>
            <option value=${question.answers[2].key}>A. ${question.answers[2]}</option>
        `,
        answerSpace.addEventListener('click', handleAnswer)
        
    }

}