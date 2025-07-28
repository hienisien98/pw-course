const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];

// Bài 4.1
console.log ("----- Bài 4.1")

let newScores = scores.map(value =>{
    if(value < 90){
        value = value + ((value*10)/100);
    }
    else{
        value = value - ((value*5)/100);
    }
    return value
})

console.log(newScores)

// Bài 4.2
console.log ("----- Bài 4.2")

let newNumbers = numbers.map(value => value.toString())
console.log(newNumbers);

// Bài 4.3
console.log ("----- Bài 4.3")

let newNumbers2 = numbers.map(value => value*2)
console.log(newNumbers2);