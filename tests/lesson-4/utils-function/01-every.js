const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Bài 1.1
console.log ("----- Bài 1.1")

let moreThan70 = scores.every(value => value > 70)
console.log(moreThan70);

// Bài 1.2
console.log ("----- Bài 1.2")

let moreThan15 = ages.every(value => value > 15)
console.log(moreThan15);

// Bài 1.3
console.log ("----- Bài 1.3")

let wordMoreThan3 = words.every(value => value.length > 3)
console.log(wordMoreThan3);