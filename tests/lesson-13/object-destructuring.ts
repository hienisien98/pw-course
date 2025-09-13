// Bài 1
console.log("------ Bài 1 ------")

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
};

const {firstName, lastName, age} = person;
console.log(firstName);
console.log(lastName);
console.log(age);

// Bài 2
console.log("------ Bài 2 ------")

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
};

const {brand, model, year, color} = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);

// Bài 3
console.log("------ Bài 3 ------")

const user = {
    name1: "Hien"
};

const { name1 = "Guest" } = user;

console.log(name1);

// Bài 4 
console.log("------ Bài 4 ------")

const product = {
    price: 10
};

const { price = 0 } = product;

console.log(price);

// Bài 5
console.log("------ Bài 5 ------")

const book = {
    title: "The Chronicles of Narnia"
}

const { title: bookTitle} = book;

console.log(bookTitle);

// Bài 6
console.log("------ Bài 6 ------")

const movie = {
    director: "Andrew Adamson"
}

const { director: filmDirector} = movie;

console.log(filmDirector);

// Bài 7 
console.log("------ Bài 7 ------")

const person2 = {
    address: {
        street: "Pham Van Dong",
        city: "HCM city",
        country: "Viet Nam"
    }
}

const {
    address: {street}
} = person2

console.log(street);

// Bài 8
console.log("------ Bài 8 ------")

const product2 = {
    details: {
        brand: "Dior",
        model1: "TX-D011",
        color: "Black"
    }
}

const {
    details: {model1}
} = product2

console.log(model1)