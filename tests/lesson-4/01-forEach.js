const numbers = [1, 2, 3];
const students = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1,2,3,4,3,55,23];
const dupArr = [1,2,3,1,2,4,5];

// Bài 1.1

numbers.forEach((value) => {
    console.log(`${value}`);
})

// Bài 1.2

let sum = 0;
let min = numbers[0];
let max = numbers[0];
numbers.forEach((value) => {
    sum = sum + value;
    if(value<min){
        min = value;
    }
    if(value>max){
        max = value;
    }
})

console.log("Tổng giá trị của mảng = " + sum);
console.log(`Giá trị nhỏ nhất của mảng = ${min}`);
console.log(`Giá trị lớn nhất của mảng = ${max}`);

// Bài 1.3

let number2 = [];

numbers.forEach((value) => {
    let result = value*2;
    number2.push(result);
})

console.log(number2)