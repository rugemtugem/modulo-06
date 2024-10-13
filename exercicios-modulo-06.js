// Strings
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalizeFirstLetter("javaScript"));
console.log(capitalizeFirstLetter("FÁBIO SOARES"));


// String com Booleanos 
function isLongString(str) {
    return str.length > 5;
}

console.log(isLongString("Fábio Soares"));
console.log(isLongString("javaScript"));

// Laço "for"
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Laço "while"
function calculateFactorial(n) {
    let result = 1;
    let i = n;
    
    while (i > 0) {
        result *= i;
        i--;
    }
    
    return result;
}

console.log(calculateFactorial(5));
console.log(calculateFactorial(3));

// Função com Argumentos
function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findMax(10, 20));
console.log(findMax(5, 3));

// Manipulação de Objetos
let car = {
    marca: "Puma Automóveis",
    modelo: "Puma",
    ano: 1964
};

function updateCarYear(car, newYear) {
    car.ano = newYear;
}

updateCarYear(car, 1974);
console.log(car);

// Acessando Propriedades com Notação de Colchetes
function getProperty(obj, key) {
    return obj[key];
}

let person = {
    nome: "Fábio Soares",
    idade: 47,
    cidade: "São Paulo"
};

console.log(getProperty(person, "idade"));
console.log(getProperty(person, "nome"));
