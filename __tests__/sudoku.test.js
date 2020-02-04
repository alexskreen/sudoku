import { Sudoku } from './../src/sudoku.js';
import { Row } from './../src/row.js';

describe ('Row', () => {
    test ('a row contains all numbers from 1 to 9 with no repeats', () => {
        var row = new Row(["1","2","3","4","5","6","7","8","9"])
        expect(row.checkRow()).toEqual("legal row");
    });
});