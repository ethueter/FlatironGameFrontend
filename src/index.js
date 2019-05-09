

// let x = document.getElementById("overlay")
// let p = document.createElement("p")
// p.innerText = "this is test"
// p.id = "test"
// let btn = document.createElement("button")
// btn.innerText = "question"
// btn.addEventListener("click",print)
// x.appendChild(p)
// x.appendChild(btn)
//canvas.addEventListener('click', draw);
 
//let div = document.getElementById("canvas-wrap")
//div.innerText = "test"

function createBoard() {

    let c = document.getElementById("board");
    c.addEventListener('click', draw)
    let ctx = c.getContext("2d");
    ctx.rect(20, 20, 600, 600);
    ctx.rect(95,95,450,450);
    ctx.rect(20,20,75,75);
    ctx.rect(20,95,75,112.5);
    ctx.rect(20,208,75,112.5);
    ctx.rect(20,320,75,112.5);
    ctx.rect(20,433,75,112.5);

    ctx.rect(545,320,75,112.5);
    ctx.rect(545,433,75,112.5);
    ctx.rect(545,95,75,112.5);
    ctx.rect(545,208,75,112.5);
    ctx.rect(545,20,75,75);

    ctx.rect(95,545,112.5,75);
    ctx.rect(208,545,112.5,75);
    ctx.rect(320,545,112.5,75);
    ctx.rect(433,545,112.5,75);
    ctx.rect(545,545,75,75);
    ctx.rect(20,545,75,75);

    ctx.rect(95,20,112.5,75);
    ctx.rect(207,20,112.5,75);
    ctx.rect(320,20,112.5,75);
    ctx.rect(433,20,112.5,75);
    ctx.rect(545,545,75,75);
    ctx.stroke();
}

createBoard()

    
 
         
    
    function draw() {
    let ctx = document.getElementById('board').getContext('2d');
    let img = new Image();
    img.src = currentPlayer.icon;
    img.onload = function() {
        ctx.drawImage(img,currentPlayer.position.x, currentPlayer.position.y, 25, 25 )  
        }
        }


        

    function draw2(player2){
        let ctx = document.getElementById('board').getContext('2d');
        let img = new Image();
        img.src = player2.icon;
        img.onload = function() {
            ctx.drawImage(img, player2.position.x, player2.position.y, 25, 25)
            }
     }



function moveForward(currentPlayer)  {
    clearOldPosition(currentPlayer)
    if (currentPlayer == player1) {
        
        player1.positionid = player1.positionid + 1
        player1.position = player1Positions[`block${player1.positionid}`]
       
    } else {
        player2.positionid = player2.positionid + 1
        player2.positon = player2Positions[`block${player2.positionid}`]
    }

    draw(currentPlayer)
    nextUp()
    
}       

function clearOldPosition(currentPlayer){
        let ctx = document.getElementById('board').getContext('2d');
        ctx.fillStyle = 'WHITE'
        ctx.fillRect(currentPlayer.position.x, currentPlayer.position.y, 25, 25);
        
       }

function nextUp() {
    let main = document.querySelector('#action-section')
    main.innerHTML = ''
    let nextScreen = document.createElement('h3')
    nextScreen.innerText = "Next Up! Are you Ready?"
    let nxtBtn = document.createElement('button')
    nxtBtn.innerText = "Hit Me!"
    nxtBtn.addEventListener('click', handleNext)
    main.appendChild(nextScreen)
    main.appendChild(nxtBtn)
}

function handleNext() {
    if (currentPlayer == player1) {
        currentPlayer = player2
        gamePlay(currentPlayer)
    } else {
        currentPlayer = player1
        gamePlay(currentPlayer)
    }
}

