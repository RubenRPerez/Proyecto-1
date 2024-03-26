const board = document.getElementById('container')


let platformArr = []

platformArr.push(new Platform(0, 470, 200, 50, board));
platformArr.push(new Platform(150, 360, 200, 50, board));
platformArr.push(new Platform(300, 250, 200, 50, board));
platformArr.push(new Platform(450, 140, 200, 50, board));
platformArr.push(new Platform(0, 0, 1024, 5, board));


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