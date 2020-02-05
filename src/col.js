export function Col(numInput) {
    this.numInput = numInput;
}

Col.prototype.checkCol = function () {
    var numString = (this.numInput).split("");
    // var numArr = numString.sort();
    // console.log(numArr);
    if (numString.sort().join("") !== "123456789") {
        return ("not a legal column");
    } else {
        return ("legal column")
    }
};
