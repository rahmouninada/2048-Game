export default class Game {

    constructor(dimension) {
        var board = [];
        this.dimension = dimension;
        this.numTiles = dimension * dimension;
        this.moveArray = [];
        this.winArray = [];

        // initializes the board to be empty (0 = empty)
        for (var i = 0; i < this.numTiles; i++) {
            board[i] = 0;
        }

        // loads info into gameState object
        this.gameState = {
            board: board,
            score: 0,
            won: false,
            over: false
        }

        this.addRandomTile();
        this.addRandomTile();
    }

    // Resets game back to a random starting position
    setupNewGame() {
        var board = [];
        for (var i = 0; i < this.numTiles; i++) {
            board[i] = 0;
        }

        this.gameState = {
            board: board,
            score: 0,
            won: false,
            over: false
        }
        this.addRandomTile();
        this.addRandomTile();
        return;
    }

    // Given a gameState object, it loads that board, score, etc...
    loadGame(gameState) {
        this.gameState = gameState;
    }

    // Given "up", "down", "left", or "right" as string input, it makes the appropriate shifts and adds a random tile.
    move(direction) {

        if (!this.gameIsOver()) {
            if (direction == "up") {
                var matrix = [];
                var row = [];
                var n = this.dimension;

                for (var i = 0; i < this.numTiles + 1; i++) {
                    if (row.length == n) {
                        matrix.push(row);
                        row = [];
                    }
                    row.push(this.gameState.board[i]);
                }

                for (var i = 0; i < n; i++) { // combine everything that needs to be combined (up to down)
                    for (var j = 0; j < n; j++) { // for each current (j), will walk down (k) & see if there is a combination for it
                        for (var k = j + 1; k < n; k++) { // below tile, always starts directly below current (j)
                            if (matrix[j][i] == 0) { // if current is 0, move down to next current (j)
                                break;
                            } else if (matrix[k][i] == 0) { // if below is 0, move onto next below
                                continue;
                            } else if (matrix[j][i] != matrix[k][i]) { // if current != below, move onto next current (j)
                                break;
                            } else if (matrix[j][i] == matrix[k][i]) { // if current == below, combine & move on
                                matrix[j][i] = matrix[j][i] + matrix[k][i];
                                this.gameState.score = this.gameState.score + matrix[j][i]; // update score
                                matrix[k][i] = 0; // make current 0
                                break;
                            }
                        }
                    }
                }

                for (var i = 0; i < n; i++) { // for each tile, find lowest tile & pull it up
                    for (var j = 0; j < n - 1; j++) {
                        if (matrix[j][i] != 0) { // if current is full, move on
                            continue;
                        } else { // if current is empty, find lowest full tile
                            var full = j; // make full equal to current (which we know is empty)
                            while (full < n) { // stops iterating at last column
                                if (matrix[full][i] != 0) { // if a below tile is full
                                    matrix[j][i] = matrix[full][i]; // replace current with full tile
                                    matrix[full][i] = 0; // make full tile 0
                                    break;
                                } else {
                                    full = full + 1;
                                    continue;
                                }
                            }
                        }
                    }
                }

                row = [];
                for (var i = 0; i < n; i++) { // load matrix into row array
                    for (var j = 0; j < n; j++) {
                        row.push(matrix[i][j]);
                    }
                }
                this.gameState.board = row; // make board the row array

                this.addRandomTile();

                this.gameState.won = this.gameState.board.includes(2048);

                this.gameIsOver();

                this.callCallbacks();
                return;

            } else if (direction == "left") {
                var matrix = [];
                var row = [];
                var n = this.dimension;

                for (var i = 0; i < this.numTiles + 1; i++) {
                    if (row.length == n) {
                        matrix.push(row);
                        row = [];
                    }
                    row.push(this.gameState.board[i]);
                }

                for (var i = 0; i < n; i++) { // combine everything that needs to be combined (L to R)
                    for (var j = 0; j < n - 1; j++) { // for each current (j), will walk right (k) & see if there is a combination for it
                        for (var k = j + 1; k < n; k++) { // right tile, always starts directly to the right of current (j)
                            if (matrix[i][j] == 0) { // if current is 0, move right to next current (j)
                                break;
                            } else if (matrix[i][k] == 0) { // if right is 0, move onto next right
                                continue;
                            } else if (matrix[i][j] != matrix[i][k]) { // if current != right, move onto next current (j)
                                break;
                            } else if (matrix[i][j] == matrix[i][k]) { // if current == right, combine into current & move on
                                matrix[i][j] = matrix[i][j] + matrix[i][k];
                                this.gameState.score = this.gameState.score + matrix[i][j]; // update score
                                matrix[i][k] = 0; // make right 0
                                break;
                            }
                        }
                    }
                }

                for (var i = 0; i < n; i++) { // for each tile, find rightmost tile & pull it left (L to R)
                    for (var j = 0; j < n - 1; j++) {
                        if (matrix[i][j] != 0) { // if current is full, move on
                            continue;
                        } else { // if current is empty, find rightmost full tile
                            var full = j; // make full equal to current (which we know is empty)
                            while (full < n) { // stops iterating at last column
                                if (matrix[i][full] != 0) { // if a right tile is full
                                    matrix[i][j] = matrix[i][full]; // replace current with full tile
                                    matrix[i][full] = 0; // make full tile 0
                                    break;
                                } else {
                                    full = full + 1;
                                    continue;
                                }
                            }
                        }
                    }
                }

                row = [];
                for (var i = 0; i < n; i++) { // load matrix into row array
                    for (var j = 0; j < n; j++) {
                        row.push(matrix[i][j]);
                    }
                }

                this.gameState.board = row; // make board the row array
                this.addRandomTile();

                this.gameState.won = this.gameState.board.includes(2048);

                this.gameIsOver();

                this.callCallbacks();

                return;
            } else if (direction == "right") {
                var matrix = [];
                var row = [];
                var n = this.dimension;

                for (var i = 0; i < this.numTiles + 1; i++) {
                    if (row.length == n) {
                        matrix.push(row);
                        row = [];
                    }
                    row.push(this.gameState.board[i]);
                }

                for (var i = n - 1; i > -1; i--) { // combine everything that needs to be combined (R to L)
                    for (var j = n - 1; j > 0; j--) { // for each current (j), will walk left (k) & see if there is a combination for it
                        for (var k = j - 1; k > -1; k--) { // left tile, always starts directly to the left of current (j)
                            if (matrix[i][j] == 0) { // if current is 0, move onto next current (j)
                                break;
                            } else if (matrix[i][k] == 0) { // if left is 0, move onto next left
                                continue;
                            } else if (matrix[i][j] != matrix[i][k]) { // if current != left, move onto next current (j)
                                break;
                            } else if (matrix[i][j] == matrix[i][k]) { // if current == left, combine & move on
                                matrix[i][j] = matrix[i][j] + matrix[i][k];
                                this.gameState.score = this.gameState.score + matrix[i][j]; // update score
                                matrix[i][k] = 0; // make left 0
                                break;
                            }
                        }
                    }
                }

                for (var i = n - 1; i > -1; i--) { // for each tile, find leftmost tile & pull it
                    for (var j = n - 1; j > 0; j--) {
                        if (matrix[i][j] != 0) { // if current is full, move on
                            continue;
                        } else { // if current is empty, find leftmost full tile
                            var full = j; // make full equal to current (which we know is empty)
                            while (full > -1) { // stops iterating at first column
                                if (matrix[i][full] != 0) { // if a left tile is full
                                    matrix[i][j] = matrix[i][full]; // replace current with full tile
                                    matrix[i][full] = 0; // make full tile 0
                                    break;
                                } else {
                                    full = full - 1;
                                    continue;
                                }
                            }
                        }
                    }
                }

                row = [];
                for (var i = 0; i < n; i++) { // load matrix into row array
                    for (var j = 0; j < n; j++) {
                        row.push(matrix[i][j]);
                    }
                }
                this.gameState.board = row; // make board the row array

                this.addRandomTile();

                this.gameState.won = this.gameState.board.includes(2048);

                this.gameIsOver();

                this.callCallbacks();
                return;

            } else if (direction == "down") {
                var matrix = [];
                var row = [];
                var n = this.dimension;

                for (var i = 0; i < this.numTiles + 1; i++) {
                    if (row.length == n) {
                        matrix.push(row);
                        row = [];
                    }
                    row.push(this.gameState.board[i]);
                }

                for (var i = n - 1; i > -1; i--) { // combine everything that needs to be combined (down to up)
                    for (var j = n - 1; j > 0; j--) { // for each current (j), will walk up (k) & see if there is a combination for it
                        for (var k = j - 1; k > -1; k--) { // above tile, always starts directly above current (j)
                            if (matrix[j][i] == 0) { // if current is 0, move up next current (j)
                                break;
                            } else if (matrix[k][i] == 0) { // if above is 0, move onto above 
                                continue;
                            } else if (matrix[j][i] != matrix[k][i]) { // if current != above, move up next current (j)
                                break;
                            } else if (matrix[j][i] == matrix[k][i]) { // if current == above, combine & move on
                                matrix[j][i] = matrix[j][i] + matrix[k][i];
                                this.gameState.score = this.gameState.score + matrix[j][i]; // update score
                                matrix[k][i] = 0; // make current 0
                                break;
                            }
                        }
                    }
                }

                for (var i = n - 1; i > -1; i--) { // for each tile, find highest tile & pull it down
                    for (var j = n - 1; j > 0; j--) {
                        if (matrix[j][i] != 0) { // if current is full, move on
                            continue;
                        } else { // if current is empty, find highest full tile
                            var full = j; // make full equal to current (which we know is empty)
                            while (full > -1) { // stops iterating at first column
                                if (matrix[full][i] != 0) { // if an above tile is full
                                    matrix[j][i] = matrix[full][i]; // replace current with full tile
                                    matrix[full][i] = 0; // make full tile 0
                                    break;
                                } else {
                                    full = full - 1;
                                    continue;
                                }
                            }
                        }
                    }
                }

                row = [];
                for (var i = 0; i < n; i++) { // load matrix into row array
                    for (var j = 0; j < n; j++) {
                        row.push(matrix[i][j]);
                    }
                }
                this.gameState.board = row; // make board the row array

                this.addRandomTile();

                this.gameState.won = this.gameState.board.includes(2048);

                this.gameIsOver();
                this.callCallbacks();
                return;
            }
        }
    }

    callCallbacks() {
        if (this.gameState.won) {
            for (var i = 0; i < this.winArray.length; i++) {
                var func = this.winArray[i];
                func(this.gameState);
            }
        }
        if (this.gameState.over) {
            for (var i = 0; i < this.moveArray.length; i++) {
                var func = this.moveArray[i];
                func(this.gameState);
            }
        }
        for (var i = 0; i < this.moveArray.length; i++) {
            var func = this.moveArray[i];
            func(this.gameState);
        }
        return;
    }

    // checks to see if there are any legal moves remaining
    isLegal() {
        var matrix = [];
        var row = [];
        var n = this.dimension;

        for (var i = 0; i < this.numTiles + 1; i++) {
            if (row.length == n) {
                matrix.push(row);
                row = [];
            }
            row.push(this.gameState.board[i]);
        }

        if (row.includes(0)) {
            return true;
        } else {
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                    if ((i == 0 && j == 0) && ((matrix[i][j] == matrix[i][j + 1]) || (matrix[i][j] == matrix[i + 1][j]))) { // top left corner
                        return true;
                    } else if ((i == n - 1 && j == 0) && ((matrix[i][j] == matrix[i][j + 1]) || (matrix[i][j] == matrix[i - 1][j]))) { // bottom left corner
                        return true;
                    } else if ((i == 0 && j == n - 1) && ((matrix[i][j] == matrix[i][j - 1]) || (matrix[i][j] == matrix[i + 1][j]))) { // top right corner
                        return true;
                    } else if ((i == n - 1 && j == n - 1) && ((matrix[i][j] == matrix[i][j - 1]) || (matrix[i][j] == matrix[i - 1][j]))) { // bottom right corner
                        return true;
                    } else if (i == 0) { // top row, not corners, can look left, right, down
                        if ((matrix[i][j] == matrix[i][j - 1]) || (matrix[i][j] == matrix[i][j + 1]) || (matrix[i][j] == matrix[i + 1][j])) {
                            return true;
                        }
                    } else if (i == n - 1) { // bottom row, not corners, can look left, right, up
                        if ((matrix[i][j] == matrix[i][j - 1]) || (matrix[i][j] == matrix[i][j + 1]) || (matrix[i][j] == matrix[i - 1][j])) {
                            return true;
                        }
                    } else if (j == 0) { // left row, not corners, can look right, up, down
                        if ((matrix[i][j] == matrix[i][j + 1]) || (matrix[i][j] == matrix[i - 1][j]) || (matrix[i][j] == matrix[i + 1][j])) {
                            return true;
                        }
                    } else if (j == n - 1) { // right row, not corners, can look left, up, down
                        if ((matrix[i][j] == matrix[i][j - 1]) || (matrix[i][j] == matrix[i - 1][j]) || (matrix[i][j] == matrix[i + 1][j])) {
                            return true;
                        }
                    } else { // not border - check up, down, left, right
                        if ((matrix[i][j] == matrix[i - 1][j]) || (matrix[i][j] == matrix[i + 1][j]) || (matrix[i][j - 1] == matrix[i][j]) || (matrix[i][j] == matrix[i][j + 1])) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    // checks to see if game is over
    gameIsOver() {
        if (this.gameState.board.includes(0)) { // if there's a zero
            this.gameState.over = false;
        } else if (this.isLegal()) {  // if there's a legal move available
            this.gameState.over = false;
        } else { // if there isn't a legal move
            this.gameState.over = true;
        }
    }
    
    // Returns a string representation of the game as text/ascii (for testing).
    toString() {
        var numRows = this.dimension;
        var tileNum = 0;
        var toPrint = [];
        for (var i = 0; i < numRows; i++) {
            for (var j = 0; j < numRows; j++) {
                if (this.gameState.board[tileNum] == 0) {
                    toPrint.push("[ ]");
                } else {
                    toPrint.push("[" + this.gameState.board[tileNum] + "]");
                }
                tileNum++;
            }
            console.log(toPrint.join(" "));
            toPrint = [];
        }
    }

    // takes a callback function as input & registers it as a listener to the move event
    // every time a move is made, the game should call all previously registered move callbacks,
    // passing in the game's current gameState as an argument to the function.
    onMove(callback) {
        this.moveArray.push(callback);
    }

    // takes callback function as input & registers it as a listener to the win event
    // game should call all previously registered win callbacks when player wins
    // it should pass in the game's current gameState as an argument to the function
    onWin(callback) {
        this.winArray.push(callback);
    }

    // takes callback function as input & registers it as a listener to the move event
    // When the game transitions into a state where no more valid moves can be made,
    // game should call all previously registered lose callbacks,
    // passing in the game's current gameState as an argument to the function.
    onLose(callback) {
        this.moveArray.push(callback);
    }

    // Returns a accurate gameState object representing the current game state.
    getGameState() {
        return this.gameState;
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // adds a random tile in an empty spot (10% change of adding a 4, 90% chance of adding a 2)
    addRandomTile() {
        // adds a random tile in an empty spot
        if (!this.gameState.board.includes(0)) { // if there aren't any empty 
            return;
        } else {
            while (1) {
                var randomSpot = this.getRandom(0, this.numTiles - 1);
                // if randomSpot is empty, adds a new tile there. else, finds another randomSpot
                if (this.gameState.board[randomSpot] == 0) {
                    if (Math.random() < .90) {
                        this.gameState.board[randomSpot] = 2;
                    } else {
                        this.gameState.board[randomSpot] = 4;
                    }
                    break;
                }
                continue;
            }
        }
    }
}
