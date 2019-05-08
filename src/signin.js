document.addEventListener('DOMContentLoaded', 


    getUserInfo(),

    document.querySelector('#sign-in').addEventListener('submit', handleGameStart)

)


function getUserInfo() {
    let main = document.querySelector('body')
    let center = document.createElement('div')

    let signInForm = document.createElement('form')
    signInForm.id = "sign-in"
    signInForm.method = "POST"

    let heading = document.createElement('h2')
    heading.innerText = "Welcome to Flatiron the Game"
    let subheading = document.createElement('h4')
    subheading.innerText = 'Add Skills To Your Resume'

    let nameLabelBegin = document.createElement('h4')
    nameLabelBegin.innerText = "Enter Your Name and Choose an Icon to Get Started"

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
        <option value="test">icon 1</option>
        <option value="">icon 2</option>
        <option value="">icon 3</option>
        <option value="">icon 4</option>
        <option value="">icon 5</option>
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
        <option value="">icon 1</option>
        <option value="">icon 2</option>
        <option value="">icon 3</option>
        <option value="">icon 4</option>
        <option value="">icon 5</option>
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

    // console.log('form-test', user1, user2)
    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user1)
    })
    .then(res => res.json())
    .then(playerData => console.log(playerData))

    // gamePlay(playerData)
}

function gamePlay(playerData) {
    console.log(playerData)
}





