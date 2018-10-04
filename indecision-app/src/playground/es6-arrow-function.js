function square(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x // implicitly returned

console.log(squareArrow(4));

const getFirstName = (fullName) => {
    return  fullName.split(' ')[0];
}

console.log(getFirstName('Michael Oh'));

const getFirstName1 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName1('Michael Oh'));