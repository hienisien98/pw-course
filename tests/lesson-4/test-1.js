let departurePlanet = "Trái đất";
let mission = "Khám phá Vũ trụ K16";
let crew = ["Hiền", "Linh", "Anh Tú", "Trang", "Minh"];

/////// Bài 01
console.log ("----- Bài 1")

function launchShip (crew){
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyên phiêu lưu ${mission}!`;
}

console.log(launchShip(crew));

/////// Bài 02
console.log ("----- Bài 2")

function calculateDistance (speed, time){
    return distance = speed*time;
}

console.log(calculateDistance(1000, 24));

/////// Bài 03
console.log ("----- Bài 3")

function convertTimeToHex(time){
    return time = time.toString(16);
}

console.log(convertTimeToHex(120));

/////// Bài 04
console.log ("----- Bài 4")

function decrypCode (code){
    let newCode = "";
    for(let value of code){
        if (value === value.toUpperCase()){
            newCode = newCode + value.toLowerCase();
            
        }else{
            newCode = newCode + value.toUpperCase();
        }
    }
    return newCode;
}


console.log(decrypCode("K16 Challenge"));

/////// Bài 05
console.log ("----- Bài 5")

function returnToEarth(){
    return "Chuẩn bị trở về Trái Đất!";
}

console.log(returnToEarth());