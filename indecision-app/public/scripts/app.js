'use strict';

function square(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
}; // implicitly returned

console.log(squareArrow(4));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Michael Oh'));

var getFirstName1 = function getFirstName1(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName1('Michael Oh'));
