//////////// Bài 01

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}

console.log(car.year)

//////////// Bài 02

let person = {
    name: "Hien",
    address: {
        street: "Tan Son Nhi",
        city: "Ho Chi Minh",
        country: "VietNam",
    }
}

console.log(person.address.street)

//////////// Bài 03

let student = {
    name: "Hien",
    grades: {
        math: 8,
        english: 6,
    }
}

console.log(student["grades"]["math"])

//////////// Bài 04

let settings ={
    volume: 50,
    brightness: 80,
}

settings.volume = 90;

console.log(settings.volume)

//////////// Bài 05

let bike = {
    model: "SS01",
    name: "Yamaha"
}

bike.color = "red";

//////////// Bài 06

let employee= {
    name: "Hien",
    age: 27,
}

delete employee.age;

//////////// Bài 07

const school= {
    classA:["An", "Binh", "Chau"],
    classB:["Dao", "Huong", "Giang"],
}

