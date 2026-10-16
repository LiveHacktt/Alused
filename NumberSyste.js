const number = 5;
const result1 = number.toString(2); // Konverteerime arvu 5 binaarsüsteemi
console.log("Arv 5 binaarsüsteemis: " + result1); // Väljasta tulemus

// näiteks meil on 6
/*
6/2 = 3 jääk 0
3/2 = 1 jääk 1
1/2 = 0 jääk 1  
110


*/
const number = 6;
const result2 = number.toString(2); // Konverteerime arvu 6 binaarsüsteemi
console.log("Arv 6 binaarsüsteemis: " + result2); // Väljasta tulemus

const a = 110; 
const result3 = parseInt(a, 2); // Konverteerime binaararvu 110 kümnendsüsteemi
console.log("Binaararv 110 kümnendsüsteemis: " + result3); // Väljasta tulemus  


const binary = 1010;
const result4 = parseInt(binary, 2); // Konverteerime binaararvu 111 kümnendsüsteemi
console.log("Binaararv 111 kümnendsüsteemis: " + result4); // Väljasta tulemus  


const number3 = 0; 
const result5 = number3.toString(2); // Konverteerime arvu 0 binaarsüsteemi
console.log("Arv 0 binaarsüsteemis: " + result5); // Väljasta tulemus


//Teisendage kümnendsüsteemist binaarsüsteemi
//110 6871 58 188714


const imenumber = 110; 
const binaryResult = imenumber.toString(2);
console.log("Arv 110 binaarsüsteemis: " + binaryResult); // Väljasta tulemus

const imenumber2 = 6871;
const binaryResult = imenumber2.toString(2);
console.log("Arv 6871 binaarsüsteemis: " + binaryResult); // Väljasta tulemus  

const imenumber3 = 58;
const binaryResult = imenumber3.toString(2);
console.log("Arv 58 binaarsüsteemis: " + binaryResult); // Väljasta tulemus 

const imenumber4 = 188714;
const binaryResult = imenumber4 .toString(2);
console.log("Arv 188714 binaarsüsteemis: " + binaryResult); // Väljasta tulemus 


//vastupidi teisendamine binaarsüsteemist kümnendsüsteemi
// 1001 01100101 10100111 10110111101

const kalanmummber2 = 1001; 
const decimalResult = parseInt(kalanmummber2, 2);
console.log("Binaararv 1001 kümnendsüsteemis: " + decimalResult); // Väljasta tulemus

const kalanmummber3 = 101100101;
const decimalResult = parseInt(kalanmummber3, 2);
console.log("Binaararv 01100101 kümnendsüsteemis: " + decimalResult); // Väljasta tulemus  

const kalanmummber4 = 10100111;
const decimalResult = parseInt(kalanmummber4, 2);
console.log("Binaararv 10100111 kümnendsüsteemis: " + decimalResult); // Väljasta tulemus

const kalanmummber5 = 10110111101;
const decimalResult = parseInt(kalanmummber5, 2);
console.log("Binaararv 10110111101 kümnendsüsteemis: " + decimalResult); // Väljasta tulemus
 


