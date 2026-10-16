// Andmetüüp ja andmestruktuur

let age = 25; // number
console.log("Type of age: " + typeof age); // Väljasta andmetüübi

const Myname = "Anna";
console.log("Type of name: " + typeof Myname); // Väljasta andmetüübi
 
const isGreater = 10 > 5; 
console.log("Type of isGreater: " + typeof isGreater); // Väljasta andmetüübi

// Muutuja ilma väärtuseta
let answer;
console.log("Type of answer: " + typeof answer); // Väljasta andmetüübi

// null väärtus
const emptyValue = null;
console.log("Type of emptyValue: " + typeof emptyValue); // Väljasta andmetüübi
console.log(emptyValue === null); // Kontrollime, kas väärtus on null   

// tüübi teisendamine/võrdlemine

/*
const a = 5;
const b = "5";
console.log(a == b); // Kontrollime, kas väärtused on võrdsed (==) - true, sest väärtused on võrdsed, kuigi tüübid erinevad
console.log(a === b); // Kontrollime, kas väärtused ja tüübid on võrdsed (===) - false, sest tüübid erinevad    
*/
// tüübi teisendamine
const bb = 5;
const cc = 5;
console.log(bb === cc); // Kontrollime, kas väärtused on võrdsed

//Võrdleme arvude ja stringide liitmist
console.log(5 + 5); // Arvude liitmine
console.log("5" + "5"); // Stringide liitmine


//Teisendamiene stringist numbriks
const text  = "string(25)"; // Teisendamine arvu stringiks
console.log("Type of text: " + typeof text); // Väljasta andmetüübi


//Objektid ja massiivid

const student = {
    name: "John",
    age: 20
};

console.log(student.name, student.age);

/*
console.log(student.name);
*/


const student2 ={
    name: "Jane"
    age: 22

};

student2.age = 23; // Muudame objekti omadust
student2.school = "Hight school"; // lisame uue omaduse
console.log(student2.name student2.age, student2.school); // väljasta objekti omadused

//Massiiv   
const grades = [90,85,78,92];
console.log("Grades:" + grades[0]); //väljasta massiiv
console.log(Array.isArray(grades)); // kontrollime, kas grades on massiiv



//pesastatud objekt
const student5 = {
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001"
  }
};

console.log(student5.name, student5.address.city, student5.address.zip);


//Set
const colors = ["red" , "green", "blue" ,"red", "green"];
const uniqueColors = new Set(colors);
console.log("uniqueColors: " + Array.from(uniqueColors));
console.log(uniqueColors.has("blue"));
console.log(uniqueColors.size); 

/*Ülesanne
looge autode markide massiiv, milles on koruvaid elemente
Leidke set abil unikaalsed elemendid ja väljastage need konsooli
leidke massivi suurus enne ja pärast set-i loomist


const automargid = ["Audi", "BMW", "Audi", "Audi", "BMW"];

const unikaalsedMargid = new Set(automargid);

console.log("Unikaalsed automargid:", [...unikaalsedMargid]);
console.log("Massiivi suurus:", automargid.length);
console.log("Unikaalsete automarkide arv:", unikaalsedMargid.size);
*/

const automargid = ["Toyota", "Honda", "Ford", "Toyota", "BMW", "Honda"];

console.log("Automarke enne Set-i:", automargid.length);

const unikaalsedMargid = new Set(automargid);

console.log("Unikaalsed automargid:", Array.from(unikaalsedMargid));
console.log("Automarke pärast Set-i:", unikaalsedMargid.size);



