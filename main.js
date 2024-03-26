const board = document.getElementById('container')


let platformArr = []

platformArr.push(new Platform(500, 470, 200, 106, board));
platformArr.push(new Platform(700, 420, 200, 156, board));
platformArr.push(new Platform(900, 370, 124, 206, board));
platformArr.push(new Platform(0, 250, 200, 50, board));
platformArr.push(new Platform(250, 140, 200, 50, board));
platformArr.push(new Platform(560, 190, 20, 20, board));
platformArr.push(new Platform(640, 100, 200, 50, board));
platformArr.push(new Platform(0, 0, 1024, 10, board));


const player = new Player(40, 50, board)

function startGame() {
    platformArr.forEach(platform => {
        platform.drawPlatform();
    });

    player.drawPlayer()
    playerTimeId = setInterval(playerMove, 20)
}

function playerMove() {
    player.move()
}

startGame()