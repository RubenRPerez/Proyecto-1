const board = document.getElementById('container')


let platformArr = []

platformArr.push(new Platform(600, 470, 200, 50, board));
platformArr.push(new Platform(700, 420, 200, 50, board));
platformArr.push(new Platform(824, 380, 200, 50, board));
platformArr.push(new Platform(0, 300, 200, 50, board));

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