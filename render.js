import Game from "./engine/game.js";

var globalGame = new Game(4);

// renders game.
export const renderGame = function(game) {
    return `<div id="outerDiv">
        <section class="section title" id="topSection">
            <div class="container has-text-centered" id="topContainer">
                <h1 class="title is-1" id="mainTitle">2048</h1>
                <h3 class="subtitle is-3" id="subtitle">
                    Join the numbers and get to the
                    <strong style="color:pink"> 2048 </strong>
                    tile!
                </h3>
                <div class="content has-text-centered">
                    <button class="button is-large is-rounded" id="restartButton">
                        New Game
                    </button>
                </div>
                <div class="score has-text-centered" id ="scoreBoard"> Score:
                     ${game.gameState.score}
                </div>
            </div>
        </section>
        <section class="section is-medium" id="bottomSection">
            <div class="container" id="buttomContainer">
                <div class="grid-container">
                    <div class="grid-item" id ="0">
                        ${game.gameState.board[0]}
                    </div>
                    <div class="grid-item" id ="1">
                        ${game.gameState.board[1]}
                    </div>
                    <div class="grid-item" id ="2">
                       ${ game.gameState.board[2]}
                    </div>
                    <div class="grid-item" id ="3">
                        ${game.gameState.board[3]}
                    </div>
                    <div class="grid-item" id ="4">
                        ${game.gameState.board[4]}
                    </div>
                    <div class="grid-item" id ="5">
                        ${game.gameState.board[5]}
                    </div>
                    <div class="grid-item" id ="6">
                        ${game.gameState.board[6]}
                    </div>
                    <div class="grid-item" id ="7">
                        ${game.gameState.board[7]}
                    </div>
                    <div class="grid-item" id ="8">
                        ${game.gameState.board[8]}
                    </div>
                    <div class="grid-item" id ="9">
                        ${game.gameState.board[9]}
                    </div>
                    <div class="grid-item" id ="10">
                        ${game.gameState.board[10]}
                    </div>
                    <div class="grid-item" id ="11">
                        ${game.gameState.board[11]}
                    </div>
                    <div class="grid-item" id ="12">
                        ${game.gameState.board[12]}
                    </div>
                    <div class="grid-item" id ="13">
                        ${game.gameState.board[13]}
                    </div>
                    <div class="grid-item" id ="14">
                        ${game.gameState.board[14]}
                    </div>
                    <div class="grid-item" id ="15">
                        ${game.gameState.board[15]}
                    </div>
                </div>
            </div>
        </section>
    </div>`;
};

// renders notification if game is lost.
export const renderLostGame = function(game) {
    return `<div id="outerDiv">
        <section class="section title" id="topSection" style="background-color:red">
            <div class="container has-text-centered" id="topContainer">
                <h1 class="title is-1" id="mainTitle">2048</h1>
                <h3 class="subtitle is-3" id="subtitle">
                    Join the numbers and get to the <strong style="color:pink"> 2048 </strong> tile!
                </h3>
                <div class="content has-text-centered">
                    <p> SORRY YOU LOST </p>
                    <button class="button is-large is-rounded" id="restartButton"> New Game </button>
                </div>
            </div>
        </section>
    </div>`;
};

// renders notification if game is won.
export const renderWonGame = function(game) {
    return `<div id="outerDiv">
        <section class="section title" id="topSection" style="background-color:green">
            <div class="container has-text-centered" id="topContainer">
                <h1 class="title is-1" id="mainTitle">2048</h1>
                <h3 class="subtitle is-3" id="subtitle">
                    Join the numbers and get to the <strong style="color:pink"> 2048 </strong> tile!
                </h3>
                <div class="content has-text-centered">
                    <p> YOU WON, KEEP GOING! </p>
                    <button class="button is-large is-rounded" id="restartButton"> New Game </button>
                </div>
            </div>
        </section>
    </div>`;
};

// handles press of keys: left, right, up, down
export const handleKeyPress = function(event) {
    if (event.which == 37) { // left
        globalGame.move("left");
    } else if (event.which == 38) { // up
        globalGame.move("up");
    } else if (event.which == 39) { // right
        globalGame.move("right");
    } else if (event.which == 40) { // down
        globalGame.move("down");   
    }
};

// handles restart button press
export const handleRestartButtonPress = function(event) {
    if(globalGame.gameState.over) {
        globalGame.setupNewGame();
        var oldTop = document.getElementById("outerDiv");
        var newTop = document.createElement("div");
        newTop.innerHTML = renderGame(globalGame);
        oldTop.replaceWith(newTop);
    }
    if(globalGame.gameState.won) {
        globalGame.setupNewGame();
        var oldTop = document.getElementById("outerDiv");
        var newTop = document.createElement("div");
        newTop.innerHTML = renderGame(globalGame);
        oldTop.replaceWith(newTop);
    }
    globalGame.setupNewGame();

    for (var i = 0; i < globalGame.numTiles; i++) {
        
        var tile = document.getElementById("" + i + "");
        if (globalGame.gameState.board[i] == 0) {
            tile.innerHTML = "";
        } else {
            tile.innerHTML = globalGame.gameState.board[i];
        }
    }
    var score = document.getElementById("scoreBoard");
    score.innerHTML = "Score: " + globalGame.gameState.score;
};

// loads game into DOM
export const loadIntoDOM = function(game) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // generates game HTML
    var renderedGame = renderGame(game);
    
    // appends the game to the $root element:
    $root.append(renderedGame);
    for (var i = 0; i < globalGame.numTiles; i++) {
        var tile = document.getElementById("" + i + "");
        if (globalGame.gameState.board[i] == 0) {
            tile.innerHTML = "";
        } else {
            tile.innerHTML = globalGame.gameState.board[i];
        }
    }

    // register callbacks:
    game.onMove(updateDom);
    game.onLose(updateLoss);
    game.onWin(updateWin);

    // adds handleKeyPress() as an event handler for pressing a key
    $(document).on("keydown", handleKeyPress);

    // adds handleRestartButtonPress() as an event handler for pressing the restart Button
    $root.on("click", "#restartButton", handleRestartButtonPress);

}

// if game is won, updates DOM
export const updateWin = function(gameState) {
    globalGame.gameState = gameState;
    if (globalGame.gameState.won) {
       var oldTop = document.getElementById("topSection");
       var newTop = document.createElement("div");
       newTop.innerHTML = renderWonGame(globalGame);
       oldTop.replaceWith(newTop);
    }
}

// if game is lost, updates DOM 
export const updateLoss = function(gameState) {
    globalGame.gameState = gameState;

    if (globalGame.gameState.over) {
       var oldTop = document.getElementById("topSection");
       var newTop = document.createElement("div");
       newTop.innerHTML = renderLostGame(globalGame);
       oldTop.replaceWith(newTop);
    }

}

// updates the values in the game grid
export const updateDom = function(gameState) {
    globalGame.gameState = gameState;

    for (var i = 0; i < globalGame.numTiles; i++) {
        
        var tile = document.getElementById("" + i + "");
        if (globalGame.gameState.board[i] == 0) {
            tile.innerHTML = "";
        } else {
            tile.innerHTML = globalGame.gameState.board[i];
        }
    }
    var score = document.getElementById("scoreBoard");
    score.innerHTML = "Score: " + globalGame.gameState.score;
 
}

// loads dom when page is ready
$(document).ready(function() {
    loadIntoDOM(globalGame);
});
