var nameVar  = 'Michael';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen'; // unable to redefine let variables
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank'; // unable to redclare nameConst and unable reinitialize nameConst
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

//  Block scoping

var fullName = 'Michael Oh';
if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);