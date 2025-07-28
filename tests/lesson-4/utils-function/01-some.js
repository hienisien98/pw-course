const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Bài 5.1
console.log ("----- Bài 5.1")

let moreThan80 = scores.some(value => value > 80)
console.log(moreThan80);

// Bài 5.2
console.log ("----- Bài 5.2")

let lessThan18 = scores.some(value => value < 18)
console.log(lessThan18);

// Bài 5.3
console.log ("----- Bài 5.3")

let wordMoreThan5 = words.some(value => value.length > 5)
console.log(wordMoreThan5);