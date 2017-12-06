let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () { 
  w = new Piece("white");
  b = new Piece("black");
  let board = [
  [null, null, null, null, null, null, null, null], 
  [null, null, null, null, null, null, null, null], 
  [null, null, null, null, null, null, null, null], 
  [null, null, null, w, b, null, null, null], 
  [null, null, null, b, w, null, null, null], 
  [null, null, null, null, null, null, null, null], 
  [null, null, null, null, null, null, null, null], 
  [null, null, null, null, null, null, null, null] ];
  return board;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  return this.grid[pos[1]][pos[0]];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  let move = false;
  let grid = this.grid;
  if(color==="white"){
    grid.forEach(function(row, index){
      for(let i=0; i<row.length; i++){
        if(row[i]===null){
          continue;
        }
        else if(row[i].color==="black"){
          if(row[i+1]===null){
            move = true;
          }

          if(i<1){
            continue;
          }
          else{
            if(row[i-1]===null){
              move = true;
            }
          }

          if(index>6){
            if(grid[index-1][i]===null){
              move = true;
            }
          }
          else{
            if(grid[index+1][i]===null){
                move = true;
              }
          }

          if(index < 1){
            if(grid[index+1][i]===null){
                move = true;
              }
          }
          else{
            if(grid[index-1][i]===null){
              move = true;
            }
          }

        }
      }
    })
  }

  else {
    grid.forEach(function(row, index){
      for(let i=0; i<row.length; i++){
        if(row[i]===null){
          continue;
        }
        else if(row[i].color==="white"){
          if(row[i+1]===null){
            move = true;
          }

          if(i<1){
            continue;
          }
          else{
            if(row[i-1]===null){
              move = true;
            }
          }

          if(index>6){
            if(grid[index-1][i]===null){
              move = true;
            }
          }
          else{
            if(grid[index+1][i]===null){
                move = true;
              }
          }

          if(index < 1){
            if(grid[index+1][i]===null){
                move = true;
              }
          }
          else{
            if(grid[index-1][i]===null){
              move = true;
            }
          }

        }
      }
    })
  }
  return move;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.grid[pos[1]][pos[0]];
  if (piece === null){
    return false;
  }
  else if(this.grid[pos[1]][pos[0]].color === color) return true;
  else { return false; }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if(this.grid[pos[1]][pos[0]]===null){
    return false;
  }
  else{
    return true;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if(!this.hasMove("white") && !this.hasMove("black")){
    return true;
  }
  else{
    return false;
  }
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  switch (true){
    case x<0 || x>7:
      return false;
      break;
    case y<0 || y>7:
      return false;
      break;
    default:
      return true;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
    let x = pos[0];
    let y = pos[1];
    if(this.isValidPos(pos) && !this.isOccupied(pos)){
      this.grid[x][y] = new Piece(color);
    }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;

