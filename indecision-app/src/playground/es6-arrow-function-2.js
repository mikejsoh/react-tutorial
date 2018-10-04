// arguments objects - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 10001));

// this keyword - no longer bound with arrow functions
const user = {
    name : 'Michael Oh',
    cities : ['Toronto', 'London', 'New York'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
    
}

console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers : [10, 20, 30],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((multiple) => this.multiplyBy * multiple);
    }
};



console.log(multiplier.multiply());