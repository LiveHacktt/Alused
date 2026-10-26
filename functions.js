// function on nimega käskude kogum, mis täidab kindlat ülesannet.
// Funktsioonid aitavad meil koodi korrastada ja korduvkasutada.

//1.
function sayHello() {
    console.log("Tere!");
}
sayHello(); // kutsume funktsiooni välja
sayHello(); // kutsume funktsiooni välja

//2. parameetrid ja argumendid
function greet(name) {
    console.log("Tere, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

//3. tagastamine /return
// return tagastamine tulemus ja lõpetab funktsiooni täitmise
function add(a, b) {
    return a + b;
}
const result = add(5, 10);
console.log("Summa on: " + result);

//4. funktsionaalne avaldis (funstion expression
const multiply = function (a,v b) {
    return a * b;
}
const product = multiply (5, 10);
console.log("Toode on: " + product);

//5. arrow function
const divide = (a, b)  => {
    return a/b;
}
const quotient = divide (10, 2);
console.log ("Jagatis on: " + quotient);

//ülesanne
//kirjutage funktioon, mis võtab argumendiks numbri ja tagastab selle numbri ruudu
// Funktsioon, mis võtab argumendiks numbri ja tagastab selle ruudu
function ruut(arv) {
    return arv * arv;
}

// Kontrollime / testime:
console.log(ruut(5)); // Väljund: 25
console.log(ruut(9)); // Väljund: 81




function square(num) {
    return num * num;
}

const squared = square(5);
console.log("Ruut on: " + squared);
