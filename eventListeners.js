window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
        case 'w':
        case " ":
            // jump player with gravity
            if(player.velocityY === 0) {
                player.velocityY = -15
            }
            break
        case 'ArrowLeft':
        case 'a':
            // move player to the left
            player.velocityX = -3
            break
        case 'ArrowRight':
        case 'd':
            //move player to the right
            player.velocityX = 3
            break
    }
})

window.addEventListener('keyup', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
        case 'a':
            player.velocityX = 0
            break
        case 'ArrowRight':
        case 'd':
            player.velocityX = 0
            break
    }
})