// if else , else if

// if võimaldab meil teha otsuseid, kui tingimus on tõene, siis käivitub if plokk, kui tingimus on väär

//if täidab  looksulgedes {} oleva ploki, kui tingimus on tõene , kui tingimus on väär, siis if plokk vahel jäetakse



const age =20;
if (age >=18) {
    console.log("Täiskavanu.");
} else {
    console.log("Noor.");
}

//2.
const points = 75;
if (points >= 90) {
    console.log("Suurepärane!");
}else if (points >= 50 ){
    console.log("Arvestatud!");
}else {
    console.log("Proovi uuesti!");
}

//3.
const hasTicket = ture;
const hasInvitation = false;
const isBlocked =false;
if ((hasTicket || hasInvitation) && !isBlocked) {
    console.log("Sissepääs lubatud");
}


//ülesanne
const number =  7;
//kontrollime, kas number on paaris või paaritud

if (number % 2 === 0) {
    console.log("Number on paaris.");
} else {
    console.log("Number on paaritu.");
}