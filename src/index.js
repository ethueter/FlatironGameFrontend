
function createBoard() {

    var c = document.getElementById("board");
    var ctx = c.getContext("2d");
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