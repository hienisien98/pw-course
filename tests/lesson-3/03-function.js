//////////// Bài 01

function multiply(a, b) {
    let multi = a * b;
    return multi;
}

console.log(multiply(2, 6));
console.log(multiply(3, 5));

//////////// Bài 02

function findMin(a, b, c) {
    if (a > b) {
        if (b > c) {
            return c;
        } else return b;
    }
    if (a < b) {
        if (a < c) {
            return a;
        } else return c;
    }
}

console.log(findMin(6, 9, 2));
console.log(findMin(3, 5, 8));

//////////// Bài 03

function getTopStudents(students, threshold){
    let result = [];
    for(i=0; i <= (students.length -1); i++){
        if (students[i].score >= threshold){
            result.push(students[i].name);
        }
    }
    return result;
}

let students = [
    {name: "Hien", score: 90},
    {name: "Phong", score: 60},
    {name: "Panh", score: 70},
    {name: "Linh", score: 65},
    {name: "Ngoc", score: 40},
    {name: "Huong", score: 50},
    {name: "Minh", score: 80},
]

console.log(getTopStudents(students, 70));

//////////// Bài 04

function calculateInterest(principal, rate, years){
    let total = principal + ((principal*rate*years)/100);
    return total;
}

console.log(calculateInterest(2000,5,3));