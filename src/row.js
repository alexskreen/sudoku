export function Row(numInput) {
    this.numInput = numInput;
}

Row.prototype.checkRow = function () {
    var numString = (this.numInput).split("");
    // var numArr = numString.sort();
    // console.log(numArr);
    if (numString.length !== 9) {
        return ("Row must contain 9 numbers");
    } else if (numString.sort().join("") !== "123456789") {
        return ("not a legal row");
    } else {
        return ("legal row")
    }
};
