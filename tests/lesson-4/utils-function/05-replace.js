let phoneNumber = "0123 456 789";
let report = "Có một lỗi trong hệ thống";
let numbersStr = "1 ,234,567";

// Bài 1
console.log ("----- Bài 1")

phoneNumber = phoneNumber.replace(" ", ".");
phoneNumber = phoneNumber.replace(" ", ".");
console.log(phoneNumber);

// Bài 2
console.log ("----- Bài 2")

report = report.replace("lỗi", "bug");
console.log(report);

// Bài 3
console.log ("----- Bài 3")

numbersStr = numbersStr.replace(" ,", ".");
numbersStr = numbersStr.replace(",", ".");
console.log(numbersStr);