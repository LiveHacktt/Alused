//Muutuja on väärtuse nimi (nagu silt)

let scroe;
scroe = 100;
let age = 25;

const schoolName = "Greenwood High"; // konstant , v22rtus ei muutu

let score1 = 0 ; // m22rame muutjua v22rtus
score1 = 50; // muudame muutuja v22rtus

console.log("Score: " + score1); //v2ljasta muutua v22rtus

let age1;
age1 = 30; 

const price = 3;
const deliveryfee =2;
const totalCost = price + deliveryfee;
console.log("Total cost:" + totalCost);


//inkrement ja dekrement

let apples = 5;
apples++; // suurendame muutuja väärtust 1 võrra
console.log("Apples: " + apples); // Väljasta muutuja väärtus

apples--; // vähendame muutuja väärtust 1 võrra
console.log("Apples: " + apples); // Väljasta muutuja väärtus

// +=
let coins = 10;
coins += 5; // suurendame muutuja väärtust 5 võrra
// coins = coins + 5; // sama mis ülal
console.log("Coins: " + coins); // Väljasta muutuja väärtus

// -=
let points = 20;
points -= 10; // Vähendame muutuja väärtust 10 võrra
// points = points - 10; // sama mis ülal
console.log("Points: " + points); // Väljasta muutuja väärtus

// kuidas muuta muutuja väärtust
let a = 5;
let b = 10;

// peab olema a ja b väärtus vahetatud
a = b; // nüüd a väärtus on 10 - vale
console.log("a: " + a + ", b: " + b); // Väljasta muutuja väärtus


//

let a = 5;
let b = 10;

// peab olema a ja b väärtus vahetatud
// a = b; // nüüd a väärtus on 10 - vale

const temp = a; // salvestame a väärtuse ajutisse muutujasse
a = b; // nüüd a väärtus on 10
b = temp; // nüüd b väärtus on 5

console.log("a: " + a + ", b: " + b); // Väljasta muutuja väärtus


// nähtavus (scope) – kus muutuja on nähtav
const value = 100; // globaalne muutuja, nähtav kogu koodis

{
  const value = 200; // kohalik muutuja, nähtav ainult selles blokis
  console.log("Local value: " + value); // Väljasta kohaliku muutuja väärtus
}

console.log("Global value: " + value); // Väljasta globaalse muutuja väärtus

// Objekti omistamisel kopeeritakse ainult viide, mitte väärtus
const firstObject = { name: "Alice" };
const secondObject = firstObject;

secondObject.name = "Bob"; // muudame secondObject omadust
console.log("First object name: " + firstObject.name);

// kopeerimine väärtuse järgi
const firstValue = { score: 100 };
const secondValue = { ...firstValue };

secondValue.score = 200; // muudame secondValue omadust

console.log("First value score: " + firstValue.score);
console.log("Second value score: " + secondValue.score);