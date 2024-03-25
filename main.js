const board = document.getElementById('container')
const player = new Player(100, 400, board)

function startGame() {
    player.drawPlayer()
    playerTimeId = setInterval(playerMove, 20)
}

function playerMove() {
    player.move()
}

startGame()