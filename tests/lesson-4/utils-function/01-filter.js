const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Bài 2.1
console.log ("----- Bài 2.1")
 
let newScores = scores.filter(value => value > 80);
console.log(newScores); 

// Bài 2.2
console.log ("----- Bài 2.2")
 
let newAges = ages.filter(value => value >= 18);
console.log(newAges); 

// Bài 2.3
console.log ("----- Bài 2.3")

let newWords = words.filter(value => value.length > 5);
console.log(newWords); 