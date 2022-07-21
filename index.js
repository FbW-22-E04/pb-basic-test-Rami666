// Add answers here 
// 1 Los or New?
const nameOfCity = (city) => {
    if (city.toLowerCase().startsWith('new')) {
        return city;
    } else if (city.toLowerCase().startsWith('los')) {
        return city;
    } else {
        return 'The city name does not begin with Los or New';
    }
};

console.log(nameOfCity('New York'));
console.log(nameOfCity('newark'));
console.log(nameOfCity('London'));

// 2 isDivisible?
const isDivisible = (num) => (num % 100 == 0 ? true : false);
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

//4 What's the weather
const isRaining = (args) =>
    args
        ? console.log('wet day - you need an umbrella')
        : console.log('dry day - leave your umbrella at home');

isRaining(true);
isRaining(false);

//1. Sequence
const geometricalSequence = () => {
    let results = 1;
    for (let i = 1; i < 270; i *= 2) {
        console.log(i);
    }
};

geometricalSequence();

// 2 Multiples
const multiplesOfThree = () => {
    for (let i = 1; i < 6; i++) {
        console.log(i * 3);
    }
};

multiplesOfThree();

// 1. You've got the power
const powerOf = (num) => console.log(Math.pow(num, num));

powerOf(3);
powerOf(4);

// 1. How many?
const vowelCount = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }

    console.log(counter);
};

vowelCount('hello');
vowelCount('test');
vowelCount('fbw');



// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

