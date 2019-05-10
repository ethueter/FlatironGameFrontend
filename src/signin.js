let player1 = {}
let player2 = {}


document.addEventListener('DOMContentLoaded', 

    
    getUserInfo(),
    

    document.querySelector('#sign-in').addEventListener('submit', handleGameStart)
   
)


function getUserInfo() {
    let main = document.querySelector('#action-section')
    let center = document.createElement('div')

    let signInForm = document.createElement('form')
    signInForm.id = "sign-in"
    signInForm.method = "POST"

    let heading = document.createElement('h2')
    heading.innerText = "Welcome to Flatiron the Game"
    let subheading = document.createElement('h4')
    subheading.innerText = 'Objective: Add Skills To Your Resume'

    let nameLabelBegin = document.createElement('h4')
    nameLabelBegin.innerText = "1.) Enter Your Name\n2.) Choose the company you want to work for!"

    let player1Label = document.createElement('label')
    player1Label.innerText = 'Player 1'
    
    let player1Break = document.createElement('br')

    let username = document.createElement('input')
    username.id = "username"
    username.type = "text"
    username.placeholder = "Name"


    let icon = document.createElement('select')
    icon.id = 'icon-select'
    icon.innerHTML = `
        
        <option value="src/images/amazon.png">Amazon</option>
        <option value="src/images/ebay.jpeg">ebay</option>
        <option value="src/images/playstation.png">PlayStation</option>
        <option value="src/images/salesforce.png">Salesforce</option>
        <option value="src/images/yelp.jpg">yelp!</option>
        `
    let formBreak = document.createElement('br')

    let nameLabel2 = document.createElement('label')
    nameLabel2.innerText = "Player 2"

    let player2Break = document.createElement('br')

    let username2 = document.createElement('input')
    username2.id = "username2"
    username2.type = "text"
    username2.placeholder = "Player 2"


    let icon2 = document.createElement('select')
    icon2.id = 'icon-select2'
    icon2.innerHTML = `
        <option value="src/images/android.png">android</option>
        <option value="src/images/houzz.jpeg">houzz</option>
        <option value="src/images/dropbox.png">dropbox</option>
        <option value="src/images/redhat.png">redhat</option>
        <option value="src/images/xbox.png">xbox</option>
        `


    let getStarted = document.createElement('button')
    getStarted.innerText = "Play!"

    signInForm.appendChild(heading)
    signInForm.appendChild(subheading)
    signInForm.appendChild(nameLabelBegin)
    signInForm.appendChild(player1Label)
    signInForm.appendChild(player1Break)
    signInForm.appendChild(username)
    signInForm.appendChild(icon)
    signInForm.appendChild(formBreak)
    signInForm.appendChild(nameLabel2)
    signInForm.appendChild(player2Break)
    signInForm.appendChild(username2)
    signInForm.appendChild(icon2)
    signInForm.appendChild(getStarted)
    center.appendChild(signInForm)
    main.appendChild(center)

}

function handleGameStart(e) {

    e.preventDefault()
    
    let user1 = {
        name: e.target[0].value,
        score: 0,
        icon: e.target[1].value,
        skill_id: 0
    }

    let user2 = {
        name: e.target[2].value,
        score: 0,
        icon: e.target[3].value,
        skill_id:0
    } 

    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user1)
    })
    .then(res => res.json())
    .then(player1Data => setPlayer1(player1Data))

    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user2)
    })
        .then(res => res.json())
        .then(player2Data => {
            setPlayer2(player2Data)
            gameRules()
        })

    e.target.reset()
    
}

function setPlayer1(player1Data) {
    player1 = player1Data
    let p1Score = document.querySelector('#player1-score')
    p1Score.innerText = `${player1.name}: ${player1.score}`

    let p1Resume = document.querySelector('#player1-resume')
    p1Resume.innerText = `${player1.name}'s Resume`
}

function setPlayer2(player2Data) {
    player2 = player2Data
    
    let p2Score = document.querySelector('#player2-score')
    p2Score.innerText = `${player2.name}: ${player2.score}`

    let p2Resume = document.querySelector('#player2-resume')
    p2Resume.innerText = `${player2.name}'s Resume`
}

function gameRules() {
    let explanation = document.querySelector('#action-section')
    explanation.innerHTML = `
        <h2>How to Play</h2>
        <p>Correctly answer questions on your turn to earn points and move forward.</p>
        <p>If you correctly answer the Code Challenges you will earn skills for your resume.</p>`

    let gameStart = document.createElement('button')
    gameStart.innerText = "Bring It On!"
    gameStart.addEventListener('click', setUpGame)
    explanation.appendChild(gameStart)

}





