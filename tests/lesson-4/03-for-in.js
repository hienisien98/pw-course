const students = { "name": "Alex", "age": 10, "salary": 20 };

// Bài 3.1
console.log("----Bài 3.1")

for (let key in students){
    console.log(key, students[key]);
}

// Bài 3.2
console.log("----Bài 3.2")

let sum = 0;

for (let key in students){
    if (typeof students[key] === 'number'){
        sum = sum + students[key]
    }
}
console.log(sum);

// Bài 3.3
console.log("----Bài 3.3")

let newStudent = [];

for (let key in students){
    newStudent.push(key);
}

console.log(newStudent)