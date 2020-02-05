export function Sudoku([row1, row2, row3, row4, row5, row6, row7, row8, row9]) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.row7 = row7;
    this.row8 = row8;
    this.row9 = row9;
}

Sudoku.prototype.transpose = function() {
    var newSudoku = [this.row1, this.row2, this.row3, this.row4, this.row5, this.row6, this.row7, this.row8, this.row9]
    var rowArr = [];
    var colArr = [];
    for (i=0; i<9; i++) {
        rowArr.push(newSudoku[i].split("")); 
    }
    for (var i = 0; i < rowArr.length; ++i) {
        for (var j = 0; j < rowArr[i].length; ++j) {
            // skip undefined values to preserve sparse array
            if (rowArr[i][j] === undefined) continue;
            // create row if it doesn't exist yet
            if (colArr[j] === undefined) colArr[j] = [];
            // swap the x and y coords for the colArr
            colArr[j][i] = rowArr[i][j];
        }
    }
    var colStr = [];
    for (i=0; i<9; i++) {
        colStr.push(colArr[i].join(""));
    }
    return colStr;
}      


