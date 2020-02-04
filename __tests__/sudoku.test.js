import { Sudoku } from './../src/sudoku.js';
import { Row } from './../src/row.js';

describe ('Row', () => {
    test ("a row must contain 9 numbers", () => {
        var row = new Row("1234");
        expect(row.checkRow()).toEqual("Row must contain 9 numbers");
    });
    test ('a row contains all numbers from 1 to 9 with no repeats', () => {
        var row = new Row("321456789")
        expect(row.checkRow()).toEqual("legal row");
    });
});

describe ('Sudoku', () => {
    test ('transposes sudoku boards row arrays to column arrays', () => {
        var sudoku = new Sudoku(["123456789", "123456789", "123456789", "123456789", "123456789", "123456789", "123456789", "123456789", "123456789", "123456789"]);
        expect(sudoku.transpose()).toEqual(["111111111", "222222222", "333333333", "444444444", "555555555", "666666666", "777777777", "888888888", "999999999"]);
    })
})