function RespawnFloor(x, y, width, height, board) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.sprite = document.createElement('div')

    this.drawRespawnFloor = function() {
        this.sprite.setAttribute("class", "respawnFloor")
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        board.appendChild(this.sprite)
    }
}
