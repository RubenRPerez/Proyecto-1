function Player (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 30
    this.height = 50
    this.velocityX = 0
    this.velocityY = 1
    this.gravity = 0.90
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

        if(sides < 994 && sides > 0) {
            self.sprite.style.left = self.x + 'px'
        } else if(sides <= 0){
            self.x = 980
            self.sprite.style.left =self.x + "px"
        } else if(sides >= 980) {
            self.x = 0
            self.sprite.style.left =self.x + "px"
        }

        for(let i = 0; i < platformArr.length; i++) {
            const currentPlatform = platformArr[i]

            if (this.x < currentPlatform.x + currentPlatform.width &&
                this.x + this.width > currentPlatform.x &&
                this.y < currentPlatform.y + currentPlatform.height &&
                this.y + this.height > currentPlatform.y) {

                    // Verifica si el personaje está tocando el vértice superior de la plataforma
                    if (this.y + this.height > currentPlatform.y && this.y + this.height < currentPlatform.y + Math.abs(this.velocityY)) {
                        // Si el personaje está tocando el vértice superior de la plataforma, ajusta su posición y velocidad en consecuencia
                        this.y = currentPlatform.y - this.height;
                        this.velocityY = 0;
                        this.gravity = 0
                    }
                    // Verifica si el personaje está tocando los lados de la plataforma
                    else {
                        // Verifica si el personaje está chocando con el lado izquierdo de la plataforma
                        if (this.x + this.width > currentPlatform.x && this.x < currentPlatform.x) {
                            // Si el personaje está chocando con el lado izquierdo de la plataforma, ajusta su posición en consecuencia
                            this.x = currentPlatform.x - this.width;
                            this.velocityY = 0
                        }
                        // Verifica si el personaje está chocando con el lado derecho de la plataforma
                        else if (this.x < currentPlatform.x + currentPlatform.width && this.x + this.width > currentPlatform.x + currentPlatform.width) {
                            // Si el personaje está chocando con el lado derecho de la plataforma, ajusta su posición en consecuencia
                            this.x = currentPlatform.x + currentPlatform.width;
                            
                        }
                        // Verifica si el personaje está chocando con el lado inferior de la plataforma
                        else if (this.y < currentPlatform.y + currentPlatform.height && this.y > currentPlatform.y) {
                            // Si el personaje está chocando con el lado inferior de la plataforma, ajusta su posición y velocidad en consecuencia
                            this.y = currentPlatform.y + currentPlatform.height;
                            this.velocityY = 0;    
                        }
                        
                    }
                    
            }

        }     
        
    }
}