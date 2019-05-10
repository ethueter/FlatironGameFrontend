


function createBoard() {
    
    let img = new Image();
    let imgLine = new Image();
    let imgWeekOne = new Image();
    let imgWeekTwo = new Image();
    let imgWeekThree = new Image();
    let codeChallenge = new Image();
    imgLine.src = 'src/images/flatline.png'
    imgWeekOne.src = 'src/images/week1.png'
    imgWeekTwo.src = 'src/images/week2.png'
    imgWeekThree.src = 'src/images/week3.png'
    img.src = 'src/images/flatiron.png';
    codeChallenge.src = 'src/images/code.png'
    let c = document.getElementById("board");
    c.addEventListener('click', draw)
    let ctx = c.getContext("2d");
    ctx.rect(20, 20, 600, 600);
    ctx.rect(95,95,450,450);
    ctx.rect(110,110,425,425);
    img.onload = function() {
        
    ctx.drawImage(img,110,95,400,425)
    ctx.drawImage(imgLine,470,550,45,45)
    ctx.drawImage(imgLine,560,130,45,45)
    ctx.drawImage(imgLine,110,25,45,45)
    ctx.drawImage(imgLine,40,450,45,45)
    ctx.drawImage(imgWeekOne,110,540,70,50)
    ctx.drawImage(imgWeekTwo,220,540,70,50)
    ctx.drawImage(imgWeekThree,330,540,70,50)
    
    ctx.drawImage(imgWeekOne,550,460,70,50)
    ctx.drawImage(imgWeekTwo,550,345,70,50)  
    ctx.drawImage(imgWeekThree,550,235,70,50)  
    
    ctx.drawImage(imgWeekOne,20,125,70,50)  
    ctx.drawImage(imgWeekTwo,20,235,70,50)
    ctx.drawImage(imgWeekThree,20,345,70,50)
     
    ctx.drawImage(imgWeekThree,220,15,70,50)
    ctx.drawImage(imgWeekTwo,330,15,70,50)
    ctx.drawImage(imgWeekOne,440,15,70,50)  

    ctx.drawImage(codeChallenge,550,15,60,50)  
    ctx.drawImage(codeChallenge,20,15,60,50)  
    ctx.drawImage(codeChallenge,20,545,60,50)  
    ctx.drawImage(codeChallenge,555,545,60,50)  
  }
      
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
        player2.position = player2Positions[`block${player2.positionid}`]
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

