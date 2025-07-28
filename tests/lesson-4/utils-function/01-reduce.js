const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// Bài 6.1
console.log ("----- Bài 6.1")

let sumScores = scores.reduce((total, num) => total + num, 0)
console.log(sumScores);

// Bài 6.2
console.log ("----- Bài 6.2")

let multiNumbers = numbers.reduce((multi, num) => multi*num, 1)
console.log(multiNumbers);

// Bài 6.3
console.log ("----- Bài 6.3")

let sumExpenses = expenses.reduce((total, num) => total + num, 0)
console.log(sumExpenses);