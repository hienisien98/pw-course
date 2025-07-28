const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// Bài 3.1
console.log ("----- Bài 3.1")
 
let newScores = scores.find(value => value > 80);
console.log(newScores); 

// Bài 3.2
console.log ("----- Bài 3.2")
 
let newAges = ages.find(value => value > 20);
console.log(newAges); 

// Bài 3.3
console.log ("----- Bài 3.3")

let newWords = words.find(value => value.length > 5);
console.log(newWords); 