import keypress from 'keypress';
import Game from "./engine/game";

// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING
// FILE IS USED FOR TESTING

// TEST:

//let game = new Game(4);

// // UP TEST:
// game.gameState.board = [8, 0, 8, 0,
//         0, 0, 0, 0,
//         0, 16, 8, 4,
//         0, 4, 0, 4];

// console.log("UP Original:")
// game.toString();
// game.move("up");

// console.log("UP Changed:");
// game.toString();

// //UP 2
// game.gameState.board = [2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2];

// console.log("UP Original:")
// game.toString();
// game.move("up");

// console.log("UP Changed:");
// game.toString();

// //UP 3
// game.gameState.board = [0, 0, 2, 0,
//         0, 0, 2, 0,
//         16, 16, 0, 0,
//         8, 0, 0, 2];

// console.log("UP Original:")
// game.toString();
// game.move("up");

// console.log("UP Changed:");
// game.toString();

// //UP 4
// game.gameState.board = [0, 0, 2, 2,
//         0, 0, 2, 2,
//         2, 16, 16, 0,
//         0, 2, 0, 2];

// console.log("UP Original:")
// game.toString();
// game.move("up");

// console.log("UP Changed:");
// game.toString();

// //UP 5
// game.gameState.board = [8, 8, 2, 2,
//         4, 0, 0, 2,
//         0, 2, 0, 4,
//         8, 16, 2, 0];

// console.log("UP Original:")
// game.toString();
// game.move("up");

// console.log("UP Changed:");
// game.toString();

// // RIGHT TEST:
// game.gameState.board = [8, 0, 8, 0,
//         0, 0, 0, 0,
//         0, 16, 8, 4,
//         0, 4, 0, 4];

// console.log("RIGHT Original:")
// game.toString();
// game.move("right");

// console.log("RIGHT Changed:");
// game.toString();

// //RIGHT 2
// game.gameState.board = [2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2];

// console.log("RIGHT Original:")
// game.toString();
// game.move("right");

// console.log("RIGHT Changed:");
// game.toString();

// //RIGHT 3
// game.gameState.board = [0, 0, 2, 0,
//         0, 0, 2, 0,
//         16, 16, 0, 0,
//         8, 0, 0, 2];

// console.log("RIGHT Original:")
// game.toString();
// game.move("right");

// console.log("RIGHT Changed:");
// game.toString();

// //RIGHT 4
// game.gameState.board = [0, 0, 2, 2,
//         0, 0, 2, 2,
//         2, 16, 16, 0,
//         0, 2, 0, 2];

// console.log("RIGHT Original:")
// game.toString();
// game.move("right");

// console.log("RIGHT Changed:");
// game.toString();


// // LEFT TEST:
// game.gameState.board = [8, 0, 8, 0,
//         0, 0, 0, 0,
//         0, 16, 8, 4,
//         0, 4, 0, 4];

// console.log("LEFT Original:")
// game.toString();
// game.move("left");

// console.log("LEFT Changed:");
// game.toString();

// //LEFT 2
// game.gameState.board = [2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2];

// console.log("LEFT Original:")
// game.toString();
// game.move("left");

// console.log("LEFT Changed:");
// game.toString();

// //LEFT 3
// game.gameState.board = [0, 0, 2, 0,
//         0, 0, 2, 0,
//         16, 16, 0, 0,
//         8, 0, 0, 2];

// console.log("LEFT Original:")
// game.toString();
// game.move("left");

// console.log("LEFT Changed:");
// game.toString();

// //LEFT 4
// game.gameState.board = [0, 0, 2, 2,
//         0, 0, 2, 2,
//         2, 16, 16, 0,
//         0, 2, 0, 2];

// console.log("LEFT Original:")
// game.toString();
// game.move("left");

// console.log("LEFT Changed:");
// game.toString();

// //LEFT 5
// game.gameState.board = [0, 2, 2, 2,
//         0, 2, 2, 2,
//         0, 2, 0, 2,
//         0, 2, 2, 2];

// console.log("LEFT Original:")
// game.toString();
// game.move("left");

// console.log("LEFT Changed:");
// game.toString();

// //LEFT 6
// game.gameState.board = [0, 2, 2, 0,
//         0, 2, 2, 2,
//         2, 2, 2, 0,
//         0, 2, 0, 2];

// console.log("LEFT Original:")
// game.toString();
// game.move("left");

// console.log("LEFT Changed:");
// game.toString();

// // DOWN TEST:
// game.gameState.board = [8, 0, 8, 0,
//         0, 0, 0, 0,
//         0, 16, 8, 4,
//         0, 4, 0, 4];

// console.log("DOWN Original:")
// game.toString();
// game.move("down");

// console.log("DOWN Changed:");
// game.toString();

// //DOWN 2
// game.gameState.board = [2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2,
//         2, 2, 2, 2];

// console.log("DOWN Original:")
// game.toString();
// game.move("down");

// console.log("DOWN Changed:");
// game.toString();

// //DOWN 3
// game.gameState.board = [0, 0, 2, 0,
//         0, 0, 2, 0,
//         16, 16, 0, 0,
//         8, 0, 0, 2];

// console.log("DOWN Original:")
// game.toString();
// game.move("down");

// console.log("DOWN Changed:");
// game.toString();

// //DOWN 4
// game.gameState.board = [0, 0, 2, 2,
//         0, 0, 2, 2,
//         2, 16, 16, 0,
//         0, 2, 0, 2];

// console.log("DOWN Original:")
// game.toString();
// game.move("down");

// console.log("DOWN Changed:");
// game.toString();

// //DOWN 5
// game.gameState.board = [0, 0, 0, 0,
//         0, 0, 0, 0,
//         0, 2, 0, 16,
//         0, 0, 0, 0];

// console.log("DOWN Original:")
// game.toString();
// game.move("down");

// console.log("DOWN Changed:");
// game.toString();

// //DOWN 5
// game.gameState.board = [0, 2, 2, 8,
//         2, 2, 2, 8,
//         2, 2, 2, 8,
//         2, 2, 2, 16];

// console.log("DOWN Original:");
// game.toString();
// game.move("down");

// console.log("DOWN Changed:");
// game.toString();


// var nums = [0, 2, 4];
// for (var i = 0; i < 1; i++) {
//         var newBoard = [];
//         // for (var j = 0; j < 16; j++) {
//         //         newBoard.push(nums[Math.floor(Math.random() * (3))]);
//         // }
//         game.gameState.board = [0, 2, 2, 8,
//         2, 2, 2, 8,
//         2, 2, 2, 8,
//         2, 2, 2, 16];
//         // game.gameState.board = newBoard;
//         console.log("DOWN Original:");
//         game.toString();
//         game.move("down");
//         console.log("DOWN Changed:");
//         game.toString();
//         console.log("UP Original:");
//         game.toString();
//         game.move("up");
//         console.log("UP Changed:");
//         game.toString();
//         console.log("RIGHT Original:");
//         game.toString();
//         game.move("right");
//         console.log("RIGHT Changed:");
//         game.toString();
//         console.log("LEFT Original:");
//         game.toString();
//         game.move("left");
//         console.log("LEFT Changed:");
//         game.toString();
// }

// let game = new Game(4);
// game.gameState.board = [8, 2, 128, 4, 2, 16, 8, 2, 16, 128, 2, 8, 4, 2, 256, 4];

// game.gameIsOver();
        
















keypress(process.stdin);

/**
 * The code in this file is used to run your game in the console. Use it
 * to help develop your game engine.
 *
 */

let game = new Game(4);
console.log(game.toString());

game.onMove(gameState => {
    console.log(game.toString());
    // console.log(game.gameState);
});

game.onWin(gameState => {
    console.log('You won with a gameState of...', gameState)
});

game.onLose(gameState => {
    console.log('You lost! :(', gameState)
    console.log(`Your score was ${gameState.score}`);
});

process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'right':
            game.move('right');
            break;
        case 'left':
            game.move('left');

            break;
        case 'down':
            game.move('down');

            break;
        case 'up':
            game.move('up');
            break;
    }
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});


process.stdin.setRawMode(true);
process.stdin.resume();

