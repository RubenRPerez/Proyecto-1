const board = document.getElementById("container")

function Player(x, y, board) {
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.sprite = document.createElement("div")
    
    this.insertPlayer = function() {
        this.sprite.setAttribute("id", "player")
        this.sprite.style.left = this.x + "px"
        this.sprite.style.top = this.y + "px"
        board.appendChild(this.sprite)
    }
}

const player = new Player(250, 250, board)

player.insertPlayer()
