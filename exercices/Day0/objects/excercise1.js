let dog = {};

console.log('empty object dog ' + dog);

dog = {
    name: 'Peter',
    legs: 4,
    color: 'Black',
    bark: function() {
        return 'woof woof';
    }
};

const fullDog = function() {
    let result = '';
    for (const key in dog) {
        result += key + ' : ' + dog[key] + ' | ';
    }
    return result
}

console.log('full dog: ' + fullDog());

