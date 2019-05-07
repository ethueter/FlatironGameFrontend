document.addEventListener('DOMContentLoaded', 


    getUserInfo(),

    document.querySelector('#sign-in').addEventListener('submit', handleGameStart)

)


function getUserInfo() {
    let main = document.querySelector('#board')
    let center = document.createElement('div')

    let signInForm = document.createElement('form')
    signInForm.id = "sign-in"
    signInForm.method = "POST"

    let heading = document.createElement('h2')
    heading.innerText = "Welcome to Flatiron the Game"
    let subheading = document.createElement('h4')
    subheading.innerText = 'Add Skills To Your Resume'

    let nameLabel = document.createElement('label')
    nameLabel.innerText = "Enter Your Name and Choose an Icon to Get Started"

    let username = document.createElement('input')
    username.className = "name"
    username.type = "text"
    username.placeholder = "Name"


    let icon = document.createElement('select')
    icon.id = 'icon-select'
    icon.innerHTML = `
        <option value="">icon 1</option>
        <option value="">icon 2</option>
        <option value="">icon 3</option>
        <option value="">icon 4</option>
        <option value="">icon 5</option>
        `
    let nameLabel2 = document.createElement('label')
    nameLabel.innerText = "Player 2 Info:"

    let username2 = document.createElement('input')
    username2.className = "name2"
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
    getStarted.value = "Play!"

    signInForm.appendChild(heading)
    signInForm.appendChild(subheading)
    signInForm.appendChild(nameLabel)
    signInForm.appendChild(username)
    signInForm.appendChild(icon)
    signInForm.appendChild(nameLabel2)
    signInForm.appendChild(username2)
    signInForm.appendChild(icon2)
    center.appendChild(signInForm)
    main.appendChild(center)

}

function handleGameStart(e) {

    let user1 = {
        name: e.target.name,
        icon: e.target.icon-select
    }

    let user2 = {
        name: e.target.name2,
        icon: e.target.icon-select2
    }

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user1, user2)
    })
    .then(res => res.json())
    .then(playerData => console.log(playerData))

    gamePlay(playerData)
}

function gamePlay(playerData) {
    console.log(playerData)
}





