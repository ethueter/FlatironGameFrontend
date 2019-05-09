

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

    
      function myMove() {
        let elem = document.createElement('img')
          elem.src = `src/smileyface.jpg`
        var pos = 100;
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
          }
        }
      }
         
    
      function draw() {
        let ctx = document.getElementById('board').getContext('2d');
        
        let img = new Image();
        img.src = 'src/android.png';
        img.onload = function() {
            ctx.drawImage(img, 100, 590, 25, 25); // home position
        //    ctx.drawImage(img, 220,590, 25, 25); // second block at bottom
        //   ctx.drawImage(img, 325,590, 25, 25); 
        //   ctx.drawImage(img, 435,590, 25, 25);
        //   ctx.drawImage(img,550,590,25,25 )

        //   ctx.drawImage(img,550,510,25,25)
        //   ctx.drawImage(img,550,400,25,25)
        //   ctx.drawImage(img,550,290,25,25)
        //   ctx.drawImage(img,550,180,25,25)
        //   ctx.drawImage(img,550,60,25,25)
        //   ctx.drawImage(img,440,60,25,25)
        //   ctx.drawImage(img,330,60,25,25)
        //   ctx.drawImage(img,210,60,25,25)
        //   ctx.drawImage(img,100,60,25,25)
        //   ctx.drawImage(img,25,60,25,25)
            
        //   ctx.drawImage(img,25,180,25,25)  
        //   ctx.drawImage(img,25,290,25,25) 
        //   ctx.drawImage(img,25,290,25,25)  
        //   ctx.drawImage(img,25,400,25,25) 
        //   ctx.drawImage(img,25,510,25,25)
        //   ctx.drawImage(img,25,590,25,25)

          //ctx.drawImage()  
            }
          }


        

          function draw2(){
          let ctx = document.getElementById('board').getContext('2d');
        let img = new Image();
        img.src = 'src/smileyface.jpg';
        img.onload = function() {
        ctx.drawImage(img, 140, 590, 25, 25); // home position
        ctx.drawImage(img, 260,590, 25, 25); // second block at bottom
        ctx.drawImage(img, 365,590, 25, 25); 
        ctx.drawImage(img, 475,590, 25, 25);
        ctx.drawImage(img,590,590,25,25 )

          ctx.drawImage(img,590,510,25,25)
          ctx.drawImage(img,590,400,25,25)
          ctx.drawImage(img,590,290,25,25)
          ctx.drawImage(img,590,180,25,25)
          ctx.drawImage(img,590,60,25,25)
          ctx.drawImage(img,480,60,25,25)
          ctx.drawImage(img,370,60,25,25)
          ctx.drawImage(img,250,60,25,25)
          ctx.drawImage(img,140,60,25,25)
          ctx.drawImage(img,65,60,25,25)
            
          ctx.drawImage(img,65,180,25,25)  
          ctx.drawImage(img,65,290,25,25) 
          ctx.drawImage(img,65,290,25,25)  
          ctx.drawImage(img,65,400,25,25) 
          ctx.drawImage(img,65,510,25,25)
          ctx.drawImage(img,65,590,25,25)

          //ctx.drawImage()  
            }
          }



          

       function print(e){
        let x = document.getElementById("test")
        x.innerText = "this is question"
        
       }

       



//img = new Image();
//img.src = "src/smileyface.ico"


