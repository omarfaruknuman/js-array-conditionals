var numbers = [21, 33, 45, 46, 34, 56];

// //1. Get element by index
var element = numbers[1];
console.log(element);

// //2. set element by index
numbers[1] = 44;
numbers[2] = 66;
console.log(numbers);

// // 4. find index of an element
var positionIndex = numbers.indexOf(21);
console.log(positionIndex);


// Practice
var person = ['Abid', 'Alif', 'Anis', 'Abul', 'Anoaw', 'Babul', 'Bano', 'Barik'];

// 1. Get element by index
var index = person[0];
var index1 = person[1];
var index2 = person[2];
console.log(index);
console.log(index1);
console.log(index2);

// 2. Set element by index
person[0] = 'Badol';
person[1] = 'Symon';
person[2] = 'Typon';
console.log(person);

// 4. find index of an element
var positionIndex = person.indexOf('Badol');
var positionIndex1 = person.indexOf('Symon');
console.log(positionIndex1);
console.log(positionIndex);

// find the index of an Element
var indexOfElement = person.indexOf('Babul');
console.log(indexOfElement);

var indexElement = person.indexOf('Abul');
console.log(indexElement);