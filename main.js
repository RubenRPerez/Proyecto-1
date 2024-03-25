const board = document.getElementById('container')
const player = new Player(840, 50, board)
const platform = new Platform(600, 470, 200, 50, board)
const platform2 = new Platform(700, 420, 200, 50, board)
const platform3 = new Platform(824, 380, 200, 50, board)
const platform4 = new Platform(0, 300, 200, 50, board)


function startGame() {
    platform.drawPlatform()
    platform2.drawPlatform()
    platform3.drawPlatform()
    platform4.drawPlatform()

    player.drawPlayer()
    playerTimeId = setInterval(playerMove, 20)
}

function playerMove() {
    player.move()
}

startGame()