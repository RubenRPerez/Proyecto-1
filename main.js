const board = document.getElementById('container')


let platformArr = []

platformArr.push(new Platform(850, 340, 40, 40, board));
platformArr.push(new Platform(700, 420, 200, 156, board));
platformArr.push(new Platform(900, 276, 124, 300, board));
platformArr.push(new Platform(0, 400, 180, 176, board));
platformArr.push(new Platform(180, 320, 130, 256, board));
platformArr.push(new Platform(340, 300, 90, 20, board));
platformArr.push(new Platform(570, 320, 90, 20, board));
platformArr.push(new Platform(450, 240, 90, 20, board));
platformArr.push(new Platform(380, 100, 200, 50, board));
platformArr.push(new Platform(0, 0, 1024, 10, board));
platformArr.push(new Platform(760, 260, 40, 40, board));
platformArr.push(new Platform(660, 170, 40, 40, board));


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