//////////// Bài 01

let sum = 0;
for (i = 1; i <= 100; i++) {
    sum = sum + i;
}
//console.log(sum)

//////////// Bài 02

for (i = 2; i <= 9; i++) {
    //console.log("Bảng cửu chương " + i);
    for (j = 1; j <= 9; j++) {
        let result = i * j;
        //console.log(i + " * " + j + " = " + result)
    }
}

//////////// Bài 03

let array = [];
for (i = 1; i <= 99; i++) {
    let oddNumber = i % 2;
    if (oddNumber != 0) {
        array.push(i);
    }
}
//console.log(array)

//////////// Bài 04

for (i = 1; i <= 10; i++) {
    //console.log("user"+i+"@example.com");
}

//////////// Bài 05

let doanhThu = [];
for (i = 1; i <= 12; i++) {
    let objectMonth = {
        "month": i,
        "total": i * 10
    }
    doanhThu.push(objectMonth);
}

console.log(doanhThu);

let sumDoanhThu = 0;
for (i = 0; i <= (doanhThu.length - 1); i++) {
    sumDoanhThu = sumDoanhThu + doanhThu[i].total;
}
console.log("Tong doanh thu = " + sumDoanhThu);