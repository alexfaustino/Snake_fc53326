$(document).ready(function() {
    $( "#1players" ).click(function() {
        $( "#1players" ).addClass( "activeN" );
        $( "#2players" ).removeClass( "activeN" )
    });
    $( "#2players" ).click(function() {
        $( "#2players" ).addClass( "activeN" );
        $( "#1players" ).removeClass( "activeN" )
    });
    // $( ".play-btn" ).click(function() {
    //     if ($("#1players").hasClass( "activeN" )) {
    //         console.log("ola1");
    //         const newGame = new NewGame();
    //     }else if ($("#2players").hasClass( "activeN" )) {
    //         const newGame2 = new NewGame2();
    //         console.log("ola2");
    //     }
    // });
    const newGame = new NewGame();
    //const newGame2 = new NewGame2();

    // $(".play-btn").click(function() {
    //     $(".menu").hide();
    //   });

});



//GAME FOR 1 PLAYER
// class NewGame {
//     constructor(){
//         this.app = $(".app")[0];
//         this.menu = $(".menu")[0];
//         this.canvas = $(".canvas")[0];
//         this.score = $(".score")[0];
//         this.context = this.canvas.getContext("2d");
//         this.settings = {canvas: {
//             width : window.innerWidth, height: window.innerHeight, background: 'black', border: 'pink'},
//             snake1: { size: 30, background: 'green', border: 'black'}
//         };
//         this.game = {snake1_speed:100, snake1_keyCodes: {87: 'up', 83: 'down', 68: 'right', 65: 'left'}};
//         this.sound = {snake1_scores: new Audio('Sounds/eat.wav'),
//                     snake1_dies: new Audio('Sounds/game_over.wav')};

//         this.setupGame();
//         this.init();
//     }

//     init(){
//         console.log("init");
//         console.log(this);
//         // var currentThis = this;
//         this.menu.querySelector('.options').addEventListener('click', event => {
//             console.log("option button clicked");
//             console.log(event.target.dataset.difficulty);
//             this.difficultyChosen(event.target.dataset.difficulty);
//         });
      
//         // Play
//         this.menu.querySelector('.play-btn').addEventListener('click', () => {
//             console.log("play button clicked");
//             this.startGame();
//         });
//         // $(".option").click(function(event) {
//         //     console.log("option button clicked");
//         //     console.log($(this).attr("id"));
//         //     $(currentThis).difficultyChosen(event.target.dataset.difficulty, $(this).attr("id"));
//         // });
//         // $(".play-btn").click(function() {
//         //     console.log("play button clicked");
//         //     console.log(currentThis);
//         //     $(currentThis).startGame();
//         // });
//     }

//     difficultyChosen(difficultyValue){
//         if (difficultyValue){
//             this.game.snake1_speed = difficultyValue;
//             $(".option").removeClass("active");
//             event.target.classList.add('active');
//         }
//     }
//     setupGame(){
//         console.log("setupGame");
//         const x = 300;
//         const y = 300;
//         this.snake1 = [{x: x, y: y}, 
//         {x: x - this.settings.snake1.size, y: y},
//         {x: x - (this.settings.snake1.size * 2), y: y}, 
//         {x: x - (this.settings.snake1.size * 3), y: y},
//         {x: x - (this.settings.snake1.size * 4), y: y}];

//         this.food = {active: false, background: 'green', border: 'pink', 
//         coordinates: {x: 0,y: 0}};

//         this.game.score_snake1 = 0;
//         this.game.direction_snake1 = 'right';
//         this.game.nextDirection_snake1 = 'right';
//     }
//     startGame(){
//         //parar som se novo jogo foi recomeçado rapidamente antes de o som terminar
//         this.sound.snake1_dies.pause();
//         this.sound.snake1_dies.currentTime = 0;

//         // dar reset a dados do jogo anterior
//         console.log("menu",this.menu);
//         this.app.classList.add('game-running');
//         this.app.classList.remove('game-over');
//         this.score.innerText = 0;

//         this.createSnake();
//         // this.startGameInterval = setInterval(function(){
//         //     if(!this.detectCollision()) {
//         //       this.createSnake();
//         //     } else {
//         //       this.endGame();
//         //     }
//         //   }, this.game.snake1_speed);
        
//         this.startGameInterval = setInterval(() => {
//         if(!this.detectCollision()) {
//             this.createSnake();
//         } else {
//             this.endGame();
//         }
//         }, this.game.snake1_speed);

//         // mudar de direção
//         //  Change direction
//         document.addEventListener('keydown', event => {
//             this.changeDirection(event.keyCode);
//         });
//         // $(document).keydown(function(event){
//         //     this.changeDirection(event.keyCode);
//         //     console.log(event.keycode);
//         // });  
//     }
//     changeDirection(keycode){
//         console.log(keycode);
//         const keyPressed = Object.keys(this.game.snake1_keyCodes).includes(keycode.toString()); 
//         if(keyPressed && this.confirmDirectionChange(this.game.snake1_keyCodes[keycode],this.game.direction_snake1)){
//             this.game.nextDirection_snake1 = this.game.snake1_keyCodes[keycode];
//         }
        
//     }
//     confirmDirectionChange(keyPressed, currentDirection){
//         console.log(keyPressed);
//         if((keyPressed === 'left' && currentDirection !== 'right') || 
//         (keyPressed === 'right' && currentDirection !== 'left') ||
//         (keyPressed === 'up' && currentDirection !== 'down') ||
//         (keyPressed === 'down' && currentDirection !== 'up')){
//             return true;
//         }else{
//             return false;
//         };
//     };
//     resetCanvas() {
//         // tamanho do ecrã inteiro
//         this.canvas.width = this.settings.canvas.width;
//         this.canvas.height = this.settings.canvas.height;
    
//         // Background do ecrã
//         this.context.fillStyle = this.settings.canvas.background;
//         this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
//     };

//     createSnake(){
//         let coordinate;

//         switch(this.game.direction_snake1){
//             case 'right':
//                 coordinate = {
//                     x: this.snake1[0].x + this.settings.snake1.size,
//                     y: this.snake1[0].y
//                   };
//                 break;
//             case 'down':
//                 coordinate = {
//                     x: this.snake1[0].x,
//                     y: this.snake1[0].y + this.settings.snake1.size
//                   };
//                 break;
//             case 'up':
//                 coordinate = {
//                     x: this.snake1[0].x,
//                     y: this.snake1[0].y - this.settings.snake1.size
//                   };
//                 break;
//             case 'left':
//                 coordinate = {
//                     x: this.snake1[0].x - this.settings.snake1.size,
//                     y: this.snake1[0].y
//                   };
//                 break;
//         }
//         this.snake1.unshift(coordinate);
//         this.resetCanvas();

//         const ateFood = this.snake1[0].x === this.food.coordinates.x && this.snake1[0].y === this.food.coordinates.y;

//         if(ateFood) {
//         this.food.active = false;
//         this.game.score_snake1 += 10;
//         this.score.innerText = this.game.score_snake1;
//         this.sound.snake1_scores.play();
//         this.sound.snake1_scores.volume = 0.9
//         } else {
//         this.snake1.pop();
//         }

//         this.createFood();
//         this.drawSnake();
//     }
//     drawSnake(){
//         const size = this.settings.snake1.size;
//         this.context.fillStyle = this.settings.snake1.background;
//         this.context.shadowColor = 'rgba(250, 100, 11, .45)';
//         this.context.shadowBlur = 20;

//         //cada pedaço da snake
//         this.snake1.forEach(coordinate => {
//             this.context.fillRect(coordinate.x, coordinate.y, size, size);
//             this.context.shadowColor = 'rgba(250, 192, 32, .45)';
//             this.context.shadowBlur = 20;
//         });

//         // $(this.snake1).each(function(coordinate){
//         //     this.context.fillRect(coordinate.x, coordinate.y, size, size);
//         //     this.context.shadowColor = 'rgba(250, 100, 11, .45)';
//         //     this.context.shadowBlur = 20;
//         // });
        
//         this.game.direction_snake1 = this.game.nextDirection_snake1;
//     }
//     createFood(){
//         //se ha comida que ainda nao ingerida no canvas nao é preciso generar nova comida
//         if(this.food.active) {
//             this.drawFood(this.food.coordinates.x, this.food.coordinates.y);
//             return;
//         }
    
//         const gridSize = this.settings.snake1.size;
//         const xMax = this.settings.canvas.width - gridSize;
//         const yMax = this.settings.canvas.height - gridSize;
    
//         const x = Math.round((Math.random() * xMax) / gridSize) * gridSize;
//         const y = Math.round((Math.random() * yMax) / gridSize) * gridSize;
    
//         //certificar que as coordenadas geradas nao entram em conflito com a posicao atual da snake
//         // se entrarem em conflito correr o metodo outra vez(recursivamente)
//         // $(this.snake1).each(function(coordinate){
//         //     const foodSnakeConflict = coordinate.x == x && coordinate.y == y;
    
//         //     if(foodSnakeConflict) {
//         //         this.createFood();
//         //     } else {
//         //         this.drawFood(x, y);
//         //     }
//         // });
//         this.snake1.forEach(coordinate => {
//             const foodSnakeConflict = coordinate.x == x && coordinate.y == y;
      
//             if(foodSnakeConflict) {
//               this.createFood();
//             } else {
//               this.drawFood(x, y);
//             }
//         });
//     }
//     drawFood(x, y) {
//         const size = this.settings.snake1.size;
    
//         this.context.fillStyle = this.food.background;
//         this.context.shadowColor = 'rgba(248, 162, 255, .35)';
//         this.context.shadowBlur = 20;
    
//         this.context.fillRect(x, y, size, size);
    
//         this.food.active = true;
//         this.food.coordinates.x = x;
//         this.food.coordinates.y = y;
//     }

//     detectCollision() {
//         // colisão contra si próprio
//         // O loop começa no 4 pois com 3 pedaços a snake nao consegue chocar contra si própria
//         for(let i = 4; i < this.snake1.length; i++) {
//           const selfCollison = this.snake1[i].x === this.snake1[0].x && this.snake1[i].y === this.snake1[0].y;
    
//           if(selfCollison) {
//             return true;
//           }
//         }
    
//         // Wall collison
//         const leftCollison = this.snake1[0].x < 0;
//         const topCollison = this.snake1[0].y < 0;
//         const rightCollison = this.snake1[0].x > this.canvas.width - this.settings.snake1.size;
//         const bottomCollison = this.snake1[0].y > this.canvas.height - this.settings.snake1.size;
    
//         return leftCollison || topCollison || rightCollison || bottomCollison;
//     }
//     endGame(){
//         this.sound.snake1_dies.play();
//         this.sound.snake1_dies.volume = 0.5
//         clearInterval(this.startGameInterval);
        
//         this.app.classList.remove('game-running');
//         this.app.classList.add('game-over');
//         $('.options h3').innerText = 'Game Over';
//         $('.options .end-score').innerText = 'Score: ${this.game.score_snake1 }';

//         this.setupGame();
//     } 
// }





//GAME FOR 2 PLAYERS
class NewGame {
    constructor(){
        this.app = $(".app")[0];
        this.menu = $(".menu")[0];
        this.canvas = $(".canvas")[0];
        this.score = $(".score")[0];
        this.context = this.canvas.getContext("2d");
        this.settings = {canvas: {
            width : window.innerWidth, height: window.innerHeight, background: '#020D32', border: 'pink'},
            snake1: { size: 30, background: 'green', border: 'black'},
            snake2: { size: 30, background: 'yellow', border: 'black'}
        };
        this.game = {snake1_speed:100, snake1_keyCodes: {87: 'up', 83: 'down', 68: 'right', 65: 'left'}, snake2_speed:100, snake2_keyCodes: {38: 'up', 40: 'down', 39: 'right', 37: 'left'}};
        this.sound = {snake1_scores: new Audio('Sounds/eat.wav'),
                    snake1_dies: new Audio('Sounds/game_over.wav'),
                    snake2_scores: new Audio('Sounds/eat.wav'),
                    snake2_dies: new Audio('Sounds/game_over.wav')};

        this.setupGame();
        this.init();
    }

    init(){
        console.log("init");
        console.log(this);
        // var currentThis = this;
        this.menu.querySelector('.options').addEventListener('click', event => {
            console.log("option button clicked");
            console.log(event.target.dataset.difficulty);
            this.difficultyChosen(event.target.dataset.difficulty);
        });
      
        // Play
        this.menu.querySelector('.play-btn').addEventListener('click', () => {
            if ($("#1players").hasClass( "activeN" )) {
                console.log("ola");
                this.startGame2();
            }else if ($("#2players").hasClass( "activeN" )) {
                console.log("ola2");
                this.startGame();
            }
        });

        // $(".option").click(function(event) {
        //     console.log("option button clicked");
        //     console.log($(this).attr("id"));
        //     $(currentThis).difficultyChosen(event.target.dataset.difficulty, $(this).attr("id"));
        // });
        // $(".play-btn").click(function() {
        //     console.log("play button clicked");
        //     console.log(currentThis);
        //     $(currentThis).startGame();
        // });
    }

    difficultyChosen(difficultyValue){
        if (difficultyValue){
            this.game.snake1_speed = difficultyValue;
            this.game.snake2_speed = difficultyValue;
            $(".option").removeClass("active");
            event.target.classList.add('active');
        }
    }
    setupGame(){
        console.log("setupGame");
        const x = 300;
        const y = 300;
        const y2 = 600;
        this.snake1 = [{x: x, y: y}, 
        {x: x - this.settings.snake1.size, y: y},
        {x: x - (this.settings.snake1.size * 2), y: y}, 
        {x: x - (this.settings.snake1.size * 3), y: y},
        {x: x - (this.settings.snake1.size * 4), y: y}];

        this.snake2 = [{x: x, y: y2}, 
            {x: x - this.settings.snake1.size, y: y2},
            {x: x - (this.settings.snake1.size * 2), y: y2}, 
            {x: x - (this.settings.snake1.size * 3), y: y2},
            {x: x - (this.settings.snake1.size * 4), y: y2}];

        this.food = {active: false, background: 'purple', border: 'pink', 
        coordinates: {x: 0,y: 0}};

        this.game.score_snake1 = 0;
        this.game.direction_snake1 = 'right';
        this.game.nextDirection_snake1 = 'right';
        this.game.score_snake2 = 0;
        this.game.direction_snake2 = 'right';
        this.game.nextDirection_snake2 = 'right';
    }
    startGame(){
        //parar som se novo jogo foi recomeçado rapidamente antes de o som terminar
        this.sound.snake1_dies.pause();
        this.sound.snake1_dies.currentTime = 0;
        this.sound.snake2_dies.pause();
        this.sound.snake2_dies.currentTime = 0;

        // dar reset a dados do jogo anterior
        console.log("menu",this.menu);
        this.app.classList.add('game-running');
        this.app.classList.remove('game-over');
        this.score.innerText = 0;

        this.createSnake();
        // this.startGameInterval = setInterval(function(){
        //     if(!this.detectCollision()) {
        //       this.createSnake();
        //     } else {
        //       this.endGame();
        //     }
        //   }, this.game.snake1_speed);
        
        this.startGameInterval = setInterval(() => {
        if(!this.detectCollision()) {
            this.createSnake();
        } else {
            this.endGame();
        }
        }, this.game.snake1_speed, this.game.snake2_speed);

        // mudar de direção
        //  Change direction
        document.addEventListener('keydown', event => {
            this.changeDirection(event.keyCode);
        });
        // $(document).keydown(function(event){
        //     this.changeDirection(event.keyCode);
        //     console.log(event.keycode);
        // });  
    }
    changeDirection(keycode){
        console.log(keycode);
        const keyPressed = Object.keys(this.game.snake1_keyCodes).includes(keycode.toString()); 
        const keyPressed2 = Object.keys(this.game.snake2_keyCodes).includes(keycode.toString()); 
        if(keyPressed && this.confirmDirectionChange(this.game.snake1_keyCodes[keycode],this.game.direction_snake1)){
            this.game.nextDirection_snake1 = this.game.snake1_keyCodes[keycode];
        }
        if(keyPressed2 && this.confirmDirectionChange(this.game.snake2_keyCodes[keycode],this.game.direction_snake2)){
            this.game.nextDirection_snake2 = this.game.snake2_keyCodes[keycode];
        }
        
    }
    confirmDirectionChange(keyPressed, currentDirection){
        console.log(keyPressed);
        if((keyPressed === 'left' && currentDirection !== 'right') || 
        (keyPressed === 'right' && currentDirection !== 'left') ||
        (keyPressed === 'up' && currentDirection !== 'down') ||
        (keyPressed === 'down' && currentDirection !== 'up')){
            return true;
        }else{
            return false;
        };
    };
    resetCanvas() {
        // tamanho do ecrã inteiro
        this.canvas.width = this.settings.canvas.width;
        this.canvas.height = this.settings.canvas.height;
    
        // Background do ecrã
        this.context.fillStyle = this.settings.canvas.background;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    createSnake(){
        let coordinate;

        switch(this.game.direction_snake1){
            case 'right':
                coordinate = {
                    x: this.snake1[0].x + this.settings.snake1.size,
                    y: this.snake1[0].y
                  };
                break;
            case 'down':
                coordinate = {
                    x: this.snake1[0].x,
                    y: this.snake1[0].y + this.settings.snake1.size
                  };
                break;
            case 'up':
                coordinate = {
                    x: this.snake1[0].x,
                    y: this.snake1[0].y - this.settings.snake1.size
                  };
                break;
            case 'left':
                coordinate = {
                    x: this.snake1[0].x - this.settings.snake1.size,
                    y: this.snake1[0].y
                  };
                break;
        }
        let coordinate2;

        switch(this.game.direction_snake2){
            case 'right':
                coordinate2 = {
                    x: this.snake2[0].x + this.settings.snake2.size,
                    y: this.snake2[0].y
                  };
                break;
            case 'down':
                coordinate2 = {
                    x: this.snake2[0].x,
                    y: this.snake2[0].y + this.settings.snake2.size
                  };
                break;
            case 'up':
                coordinate2 = {
                    x: this.snake2[0].x,
                    y: this.snake2[0].y - this.settings.snake2.size
                  };
                break;
            case 'left':
                coordinate2 = {
                    x: this.snake2[0].x - this.settings.snake2.size,
                    y: this.snake2[0].y
                  };
                break;
        }
        this.snake1.unshift(coordinate);
        this.snake2.unshift(coordinate2);
        this.resetCanvas();

        const ateFood = this.snake1[0].x === this.food.coordinates.x && this.snake1[0].y === this.food.coordinates.y;
        const ateFood2 = this.snake2[0].x === this.food.coordinates.x && this.snake2[0].y === this.food.coordinates.y;

        if(ateFood) {
        console.log("first snake ate food");
        this.food.active = false;
        this.game.score_snake1 += 10;
        this.score.innerText = this.game.score_snake1;
        this.sound.snake1_scores.play();
        this.sound.snake1_scores.volume = 0.9
        } else {
        this.snake1.pop();
        }
        if(ateFood2) {
        console.log("second snake ate food");
        this.food.active = false;
        this.game.score_snake2 += 10;
        this.score.innerText = this.game.score_snake2;
        this.sound.snake2_scores.play();
        this.sound.snake2_scores.volume = 0.9
        } else {
        this.snake2.pop();
        }

        this.createFood();
        this.drawSnake();
    }
    drawSnake(){
        const size = this.settings.snake1.size;
        this.context.fillStyle = this.settings.snake1.background;
        const size2 = this.settings.snake2.size;
        this.context.shadowColor = 'rgba(250, 100, 11, .45)';
        this.context.shadowBlur = 20;

        //cada pedaço da snake
        this.snake1.forEach(coordinate => {
            this.context.fillRect(coordinate.x, coordinate.y, size, size);
            this.context.shadowColor = 'rgba(250, 192, 32, .45)';
            this.context.shadowBlur = 20;
        });
        this.context.fillStyle = this.settings.snake2.background;
        this.snake2.forEach(coordinate => {
            this.context.fillRect(coordinate.x, coordinate.y, size2, size2);
            this.context.shadowColor = 'rgba(250, 192, 32, .45)';
            this.context.shadowBlur = 20;
        });

        // $(this.snake1).each(function(coordinate){
        //     this.context.fillRect(coordinate.x, coordinate.y, size, size);
        //     this.context.shadowColor = 'rgba(250, 100, 11, .45)';
        //     this.context.shadowBlur = 20;
        // });
        
        this.game.direction_snake1 = this.game.nextDirection_snake1;
        this.game.direction_snake2 = this.game.nextDirection_snake2;
    }
    createFood(){
        //se ha comida que ainda nao ingerida no canvas nao é preciso generar nova comida
        if(this.food.active) {
            this.drawFood(this.food.coordinates.x, this.food.coordinates.y);
            return;
        }
        //snake1
        const gridSize = this.settings.snake1.size;
        const xMax = this.settings.canvas.width - gridSize;
        const yMax = this.settings.canvas.height - gridSize;
    
        const x = Math.round((Math.random() * xMax) / gridSize) * gridSize;
        const y = Math.round((Math.random() * yMax) / gridSize) * gridSize;

        //snake2
        const gridSize2 = this.settings.snake2.size;
        const xMax2 = this.settings.canvas.width - gridSize2;
        const yMax2 = this.settings.canvas.height - gridSize2;
    
        const x2 = Math.round((Math.random() * xMax2) / gridSize2) * gridSize2;
        const y2 = Math.round((Math.random() * yMax2) / gridSize2) * gridSize2;
    
        //certificar que as coordenadas geradas nao entram em conflito com a posicao atual da snake
        // se entrarem em conflito correr o metodo outra vez(recursivamente)
        // $(this.snake1).each(function(coordinate){
        //     const foodSnakeConflict = coordinate.x == x && coordinate.y == y;
    
        //     if(foodSnakeConflict) {
        //         this.createFood();
        //     } else {
        //         this.drawFood(x, y);
        //     }
        // });
        this.snake1.forEach(coordinate => {
            const foodSnakeConflict = coordinate.x == x && coordinate.y == y;
      
            if(foodSnakeConflict) {
              this.createFood();
            } else {
              this.drawFood(x, y);
            }
        });
        this.snake2.forEach(coordinate => {
            const foodSnakeConflict = coordinate.x == x2 && coordinate.y == y2;
      
            if(foodSnakeConflict) {
              this.createFood();
            } else {
              this.drawFood(x, y);
            }
        });
    }
    drawFood(x, y) {
        const size = this.settings.snake1.size;
    
        this.context.fillStyle = this.food.background;
        this.context.shadowColor = 'rgba(248, 162, 255, .35)';
        this.context.shadowBlur = 20;
    
        this.context.fillRect(x, y, size, size);
    
        this.food.active = true;
        this.food.coordinates.x = x;
        this.food.coordinates.y = y;
    }

    detectCollision() {
        // colisão contra si próprio
        // O loop começa no 4 pois com 3 pedaços a snake nao consegue chocar contra si própria
        for(let i = 4; i < this.snake1.length; i++) {
          const selfCollison = this.snake1[i].x === this.snake1[0].x && this.snake1[i].y === this.snake1[0].y;
    
          if(selfCollison) {
            return true;
          }
        }

        for(let i = 4; i < this.snake2.length; i++) {
            const selfCollison = this.snake2[i].x === this.snake2[0].x && this.snake2[i].y === this.snake2[0].y;
      
            if(selfCollison) {
              return true;
            }
          }
    
        // Wall collison
        const leftCollison = this.snake1[0].x < 0;
        const topCollison = this.snake1[0].y < 0;
        const rightCollison = this.snake1[0].x > this.canvas.width - this.settings.snake1.size;
        const bottomCollison = this.snake1[0].y > this.canvas.height - this.settings.snake1.size;
        //snake2
        const leftCollison2 = this.snake2[0].x < 0;
        const topCollison2 = this.snake2[0].y < 0;
        const rightCollison2 = this.snake2[0].x > this.canvas.width - this.settings.snake2.size;
        const bottomCollison2 = this.snake2[0].y > this.canvas.height - this.settings.snake2.size;
    
        return leftCollison || topCollison || rightCollison || bottomCollison || leftCollison2 || topCollison2 || rightCollison2 || bottomCollison2 ;
    }
    endGame(){
        this.sound.snake1_dies.play();
        this.sound.snake1_dies.volume = 0.5
        clearInterval(this.startGameInterval);
        
        this.app.classList.remove('game-running');
        this.app.classList.add('game-over');
        $('.options h3').innerText = 'Game Over';
        $('.options .end-score').innerText = 'Score snake n1: ${this.game.score_snake1 } Score snake n2: ${this.game.score_snake2 }';

        this.setupGame();
    } 


    //2 snakes
    startGame2(){
        //parar som se novo jogo foi recomeçado rapidamente antes de o som terminar
        this.sound.snake1_dies.pause();
        this.sound.snake1_dies.currentTime = 0;

        // dar reset a dados do jogo anterior
        console.log("menu",this.menu);
        this.app.classList.add('game-running');
        this.app.classList.remove('game-over');
        this.score.innerText = 0;

        this.createSnake2();
        // this.startGameInterval = setInterval(function(){
        //     if(!this.detectCollision()) {
        //       this.createSnake();
        //     } else {
        //       this.endGame();
        //     }
        //   }, this.game.snake1_speed);
        
        this.startGameInterval = setInterval(() => {
        if(!this.detectCollision2()) {
            this.createSnake2();
        } else {
            this.endGame2();
        }
        }, this.game.snake1_speed);

        // mudar de direção
        //  Change direction
        document.addEventListener('keydown', event => {
            this.changeDirection2(event.keyCode);
        });
        // $(document).keydown(function(event){
        //     this.changeDirection(event.keyCode);
        //     console.log(event.keycode);
        // });  
    }
    changeDirection2(keycode){
        console.log(keycode);
        const keyPressed = Object.keys(this.game.snake1_keyCodes).includes(keycode.toString()); 
        if(keyPressed && this.confirmDirectionChange2(this.game.snake1_keyCodes[keycode],this.game.direction_snake1)){
            this.game.nextDirection_snake1 = this.game.snake1_keyCodes[keycode];
        }
        
    }
    confirmDirectionChange2(keyPressed, currentDirection){
        console.log(keyPressed);
        if((keyPressed === 'left' && currentDirection !== 'right') || 
        (keyPressed === 'right' && currentDirection !== 'left') ||
        (keyPressed === 'up' && currentDirection !== 'down') ||
        (keyPressed === 'down' && currentDirection !== 'up')){
            return true;
        }else{
            return false;
        };
    };
    resetCanvas2() {
        // tamanho do ecrã inteiro
        this.canvas.width = this.settings.canvas.width;
        this.canvas.height = this.settings.canvas.height;

        // Background do ecrã
        this.context.fillStyle = this.settings.canvas.background;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    createSnake2(){
        let coordinate;

        switch(this.game.direction_snake1){
            case 'right':
                coordinate = {
                    x: this.snake1[0].x + this.settings.snake1.size,
                    y: this.snake1[0].y
                };
                break;
            case 'down':
                coordinate = {
                    x: this.snake1[0].x,
                    y: this.snake1[0].y + this.settings.snake1.size
                };
                break;
            case 'up':
                coordinate = {
                    x: this.snake1[0].x,
                    y: this.snake1[0].y - this.settings.snake1.size
                };
                break;
            case 'left':
                coordinate = {
                    x: this.snake1[0].x - this.settings.snake1.size,
                    y: this.snake1[0].y
                };
                break;
        }
        this.snake1.unshift(coordinate);
        this.resetCanvas2();

        const ateFood = this.snake1[0].x === this.food.coordinates.x && this.snake1[0].y === this.food.coordinates.y;

        if(ateFood) {
        this.food.active = false;
        this.game.score_snake1 += 10;
        this.score.innerText = this.game.score_snake1;
        this.sound.snake1_scores.play();
        this.sound.snake1_scores.volume = 0.9
        } else {
        this.snake1.pop();
        }

        this.createFood2();
        this.drawSnake2();
    }
    drawSnake2(){
        const size = this.settings.snake1.size;
        this.context.fillStyle = this.settings.snake1.background;
        this.context.shadowColor = 'rgba(250, 100, 11, .45)';
        this.context.shadowBlur = 20;

        //cada pedaço da snake
        this.snake1.forEach(coordinate => {
            this.context.fillRect(coordinate.x, coordinate.y, size, size);
            this.context.shadowColor = 'rgba(250, 192, 32, .45)';
            this.context.shadowBlur = 20;
        });

        // $(this.snake1).each(function(coordinate){
        //     this.context.fillRect(coordinate.x, coordinate.y, size, size);
        //     this.context.shadowColor = 'rgba(250, 100, 11, .45)';
        //     this.context.shadowBlur = 20;
        // });
        
        this.game.direction_snake1 = this.game.nextDirection_snake1;
    }
    createFood2(){
        //se ha comida que ainda nao ingerida no canvas nao é preciso generar nova comida
        if(this.food.active) {
            this.drawFood2(this.food.coordinates.x, this.food.coordinates.y);
            return;
        }

        const gridSize = this.settings.snake1.size;
        const xMax = this.settings.canvas.width - gridSize;
        const yMax = this.settings.canvas.height - gridSize;

        const x = Math.round((Math.random() * xMax) / gridSize) * gridSize;
        const y = Math.round((Math.random() * yMax) / gridSize) * gridSize;

        //certificar que as coordenadas geradas nao entram em conflito com a posicao atual da snake
        // se entrarem em conflito correr o metodo outra vez(recursivamente)
        // $(this.snake1).each(function(coordinate){
        //     const foodSnakeConflict = coordinate.x == x && coordinate.y == y;

        //     if(foodSnakeConflict) {
        //         this.createFood();
        //     } else {
        //         this.drawFood(x, y);
        //     }
        // });
        this.snake1.forEach(coordinate => {
            const foodSnakeConflict = coordinate.x == x && coordinate.y == y;
    
            if(foodSnakeConflict) {
            this.createFood2();
            } else {
            this.drawFood2(x, y);
            }
        });
    }
    drawFood2(x, y) {
        const size = this.settings.snake1.size;

        this.context.fillStyle = this.food.background;
        this.context.shadowColor = 'rgba(248, 162, 255, .35)';
        this.context.shadowBlur = 20;

        this.context.fillRect(x, y, size, size);

        this.food.active = true;
        this.food.coordinates.x = x;
        this.food.coordinates.y = y;
    }

    detectCollision2() {
        // colisão contra si próprio
        // O loop começa no 4 pois com 3 pedaços a snake nao consegue chocar contra si própria
        for(let i = 4; i < this.snake1.length; i++) {
        const selfCollison = this.snake1[i].x === this.snake1[0].x && this.snake1[i].y === this.snake1[0].y;

        if(selfCollison) {
            return true;
        }
        }

        // Wall collison
        const leftCollison = this.snake1[0].x < 0;
        const topCollison = this.snake1[0].y < 0;
        const rightCollison = this.snake1[0].x > this.canvas.width - this.settings.snake1.size;
        const bottomCollison = this.snake1[0].y > this.canvas.height - this.settings.snake1.size;

        return leftCollison || topCollison || rightCollison || bottomCollison;
    }
    endGame2(){
        this.sound.snake1_dies.play();
        this.sound.snake1_dies.volume = 0.5
        clearInterval(this.startGameInterval);
        
        this.app.classList.remove('game-running');
        this.app.classList.add('game-over');
        $('.options h3').innerText = 'Game Over';
        $('.options .end-score').innerText = 'Score: ${this.game.score_snake1 }';

        this.setupGame();
    } 
}
