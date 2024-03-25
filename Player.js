function Player (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.velocityX = 0
    this.velocityY = 1
    this.gravity = 0.05
    this.sprite = document.createElement('div')

    this.drawPlayer = function() {
        self.sprite.setAttribute('id', 'player')
        self.sprite.style.left = self.x + 'px'
        self.sprite.style.top = self.y + 'px'
        board.appendChild(self.sprite)
    }

    this.move = function() {
        self.x += self.velocityX
        let sides = self.x

        self.y += self.velocityY
        let sideBottom = self.y
        
        // posicion + velocidad porque si no se queda el personaje despegazo del limite               
        if (sideBottom + self.velocityY < 526) {
            self.velocityY += self.gravity
            self.sprite.style.top = self.y + 'px'
        } else {
            self.velocityY = 0
        }

        if(sides < 976 && sides > 0) {
            self.sprite.style.left = self.x + 'px'
        } else if(sides <= 0){
            self.x = 974
            self.sprite.style.left =self.x + "px"
        } else if(sides >= 976) {
            self.x = 0
            self.sprite.style.left =self.x + "px"
        }

        if (this.x < platform3.x + platform3.width &&
        this.x + this.width > platform3.x &&
        this.y < platform3.y + platform3.height &&
        this.y + this.height > platform3.y) {
            this.y = platform3.y -50 
            this.velocityY = 0
        } 
    }
}


