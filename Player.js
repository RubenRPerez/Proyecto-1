function Player (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 30
    this.height = 50
    this.velocityX = 0
    this.velocityY = 1
    this.gravity = 0.70
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
        // Verifica si el personaje está tocando el vértice superior de la plataforma
        if (this.y + this.height > platform3.y && this.y + this.height < platform3.y + Math.abs(this.velocityY)) {
            // Si el personaje está tocando el vértice superior de la plataforma, ajusta su posición y velocidad en consecuencia
            this.y = platform3.y - this.height;
            this.velocityY = 0;
        }
        // Verifica si el personaje está tocando los lados de la plataforma
        else {
            // Verifica si el personaje está chocando con el lado izquierdo de la plataforma
            if (this.x + this.width > platform3.x && this.x < platform3.x) {
                // Si el personaje está chocando con el lado izquierdo de la plataforma, ajusta su posición en consecuencia
                this.x = platform3.x - this.width;
            }
            // Verifica si el personaje está chocando con el lado derecho de la plataforma
            else if (this.x < platform3.x + platform3.width && this.x + this.width > platform3.x + platform3.width) {
                // Si el personaje está chocando con el lado derecho de la plataforma, ajusta su posición en consecuencia
                this.x = platform3.x + platform3.width;
            }
            // Verifica si el personaje está chocando con el lado inferior de la plataforma
            else if (this.y < platform3.y + platform3.height && this.y > platform3.y) {
                // Si el personaje está chocando con el lado inferior de la plataforma, ajusta su posición y velocidad en consecuencia
                this.y = platform3.y + platform3.height;
                this.velocityY = 0;
            }
        }
}

   
        
        
    }
}