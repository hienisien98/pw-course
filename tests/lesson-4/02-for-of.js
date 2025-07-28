const str = "Playwright";
const arr = [1,2,3,4,3,55,23];
const dupArr = [1,2,3,1,2,4,5];

// Bài 2.1

for (let i of str){
    //console.log(i);
}

// Bài 2.2

let arr1 = [];

for (let value of str){
     arr1.unshift(value);
}

//console.log(arr);

// Bài 2.3

let firstPosition = -1;
let lastPosition = -1;
let index = 0;

for (let value of arr){
    if(value ===3){
        if(firstPosition == -1){
            firstPosition = index;
        }
        lastPosition = index;
    }
    index++;
}

console.log(firstPosition);
console.log(lastPosition);

// Bài 2.4 - Không biết làm

