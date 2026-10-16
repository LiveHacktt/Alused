// massiiv on kindlas järjekorras olevate väärtuste kogum

// index – igal väärtusel on oma järjekorranumber, mis algab 0-st

// lugemine: numbers[0] loeb esimese väärtuse, numbers[1] teise väärtuse jne
// muutmine: numbers[0] = 10 muudab esimese väärtuse, numbers[1] = 20 muudab teise väärtuse

// push() – lisab uue väärtuse massiivi lõppu
// pop() – eemaldab viimase väärtuse massiivist
// forEach() – käivitab funktsiooni iga massiivi väärtuse jaoks
// map() – loob uue massiivi, kus iga väärtus on muudetud funktsiooni abil
// sort() – sorteerib massiivi väärtused


const fruits = ["apple", "banana", "cherry"];
console.log("Fruits: " + fruits); // Väljasta massiiv

const numbers = [1, 2, 3, 4, 5];

console.log("First number: " + numbers[0]);
console.log("Second number: " + numbers[1]);
console.log("Viimane number: " + numbers[numbers.length - 1]); // Väljasta viimane number

// asendame massiivi väärtuse
numbers[2] = 10; // Muudame kolmanda väärtuse
console.log("Updated numbers: " + numbers); // Väljasta muudetud massiiv

// lisame massiivi väärtuse
numbers.push(6);
console.log("Numbers after push: " + numbers); // Väljasta massiiv pärast lisamist

// eemaldame massiivi väärtuse
numbers.pop();
console.log("Numbers after pop: " + numbers); // Väljasta massiiv pärast eemaldamist

// forEach() – käivitab funktsiooni iga massiivi väärtuse jaoks
numbers.forEach(function(number) {
  console.log("Number: " + number); // Väljasta iga number massiivist
});

// map() – loob uue massiivi, kus iga väärtus on muudetud funktsiooni abil
const doubledNumbers = numbers.map(function(number) {
  return number * 2; // Korrutame iga numbri kahega
});

console.log("Doubled numbers: " + doubledNumbers); // Väljasta uus massiiv

// massiiv massiivis
const table = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("First row, second column: " + table[0][1]);


//Ülesanne
/*
Teil on massiiv [6, 3, 8, 2, 5].
Leidke massiivist esimene element ja viimane element.
Asendage esimene element väärtusega 10 ja viimane element väärtusega 20.
Väljasta muudetud massiiv konsooli ja selle suurus.
*/
const numbers = [6, 3, 8, 2, 5];

console.log("Esimene element: " + numbers[0]);
console.log("Viimane element: " + numbers[numbers.length - 1]);

numbers[0] = 10;
numbers[numbers.length - 1] = 20;

console.log("Muudetud massiiv: " + numbers);
console.log("Massiivi suurus: " + numbers.length);


