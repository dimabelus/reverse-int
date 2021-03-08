module.exports = function reverse(n) {
    // Create the absolute value of a number
    let absN = Math.abs(n);
    // Convert number to string
    // Split string to character, reverse characters' order and join to string
    let strNumber = absN.toString().split("").reverse().join("");
    // Convert string to number
    let convertedNumber = parseInt(strNumber);
    // Return reversed number;
    return convertedNumber;
};
