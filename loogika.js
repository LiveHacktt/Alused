//laualambi sisselülitamine

//Reegel: lamp põleb, kui elektrivool on olemas ja lüliti on sisse lülitatud.

const PowerOn = true; // Elektrivool on olemas
const SwitchOn = true; // Lüliti on siise lülitatud

const result1 = PowerOn && SwitchOn; // kontrollime, kas lamp põleb
console.log("Kas lamp põleb? " + result1); // Väljasta tulemus

//2. Veebitunni avamine
// reegel: tunni avamiseks on vaja interneti ühendust ja linki

//interneti ühendus on olemas
const InternetOn = true;
//link olemas
const Haslink = false;
const result2 = InternetOn && Haslink; // kontrollime, kas tunni saab avada
console.log("Kas veebitundi saab avada? " + result2); // Väljasta tulemus

//&& - loogiline JA (AND) loogikaoperaator operaator //konsjunktsioon
//|| - loogiline VÕI (OR) loogikaoperaator operaator//disjunktsioon 

//3. Ostu eest tasumine
// Reegel: sularaha või pangakaardiga

const CashAvailable = false; // Sularaha olemas
const HasCard = true; // Pangakaart olemas

const result3 = CashAvailable || HasCard; // kontrollime, kas saab tasuda
console.log("Kas saab tasuda? " + result3); // Väljasta tulemus

//4. Teate saamine
// Reegel: teate on saadud, kui saabus e-kiri või SMS

const Sainmeili = false; // E-kiri saabus
const SainSMS = true; // SMS saabus

const result4 = Sainmeili || SainSMS; // kontrollime, kas teate on saadud
console.log("Kas teate on saadud? " + result4); // Väljasta tulemus


//5. Akna avamine
// Reegel: Võib avada, kui vihma ei saja 

const Rain = false; // Vihma ei saja
const result5 = !Rain; // kontrollime, kas akent võib avada
console.log("Kas akent võib avada? " + result5); // Väljasta tulemus


//! tähistab loogilist eitust (NOT) loogikaoperaatorit

//6. Serveri käivitamine
// Reegel: Vajab on sisselülitatud arvutid, paigaldatud operatstioonsüsteemi
// ja kävitamisõigust

const ComputerOn = true; // Arvuti on sisse lülitatud
const OSInstalled = true; // Operatsioonisüsteem on paigaldatud
const HasPermission = false; // Käivitamisõigus on olemas

const result6 = ComputerOn && OSInstalled && HasPermission; // kontrollime
console.log("Kas serveri saab käivitada? " + result6); // Väljasta tulemus



// + tähistab liitmist, aga kui kasutada stringide puhul, siis liidab stringid kokku  
// - tähistab lahutamist, aga kui kasutada stringide puhul, siis üritab teisendada stringi numbriks ja lahutada

//7. Kooli jõudmine
// Reegel: kooli saab minna bussi, jalgratta või (||) vanematega autoga
const BusAvailable = false; // Buss on olemas
const BikeAvailable = true; // Jalgratas on olemas
const ParentsCarAvailable = false; // Vanemate auto on olemas

const result7 = BusAvailable || BikeAvailable || ParentsCarAvailable; // kontrollime, kas kooli saab minna
console.log("Kas kooli saab minna? " + result7); // Väljasta tulemus

// loogika kui on false väärtus, siis on see false, kui on true väärtus, siis on see true
// kui näiteks buss on olemas, siis on see true, kui buss ei ole olemas, siis on see false

//8. Filmi vaatamine
// Reegel: Vaja on internetiühendust ning tellimust või ostetud veebiseansi piletit
const InternetOnRuumis = false; // Internetiühendus on olemas
const HasSubscription = true; // Tellimus on olemas
const HasTicket = true; // Ostetud veebiseansi pilet on olemas 

const result8 = InternetOnRuumis && (HasSubscription || HasTicket); // kontrollime, kas filmi saab vaadata
console.log("Kas filmi saab vaadata? " + result8); // Väljasta tulemus


//9. Piknik
// Reegel: Vaja on toitu ning kuiva ilma või katusega lehtlat

const FoodAvailable = true; // Toit on olemas
const DryWeather = false; // Ilm on kuiv
const HasShelter = true; // Katusega lehtla on olemas   

const result9 = FoodAvailable && (DryWeather || HasShelter); // kontrollime, kas piknikku saab pidada
console.log("Kas piknikku saab pidada? " + result9); // Väljasta tulemus

// true on väärtus, mis tähendab, et tingimus on täidetud
// false on väärtus, mis tähendab, et tingimus ei ole täidetud


//10. Uuenduse allalaadimine
// Reegel: Vaja on internetiühendust ning ja kettaruuni 
//Madal akutase koos ühendamata laadijaga keelab allalaadimise

const InternetConnection = true; // Internetiühendus on olemas
const Diskspace = true; // Kettaruum on olemas
const LowBattery = true; // Madal aku tase on olemas
const ChargerConnected = false; // Laadija on ühendatud

const result10 = InternetConnection && Diskspace && (!LowBattery || ChargerConnected); // kontrollime, kas uuendust saab alla laadida
console.log("Kas uuendust saab alla laadida? " + result10); // Väljasta tulemus


//11. Valmis tellimuse kättesaamine
// Reegel: Tellimuse peab olema valmis, kuller või väljastuspunktis saadaval ning väljastamine bolkeerimata

const OrderReady = true; // Tellimus on valmis
const CourierAvailable = false; // Kuller on saadaval
const PickupPointAvailable = true; // Väljastuspunkt on saadaval
const Blocked = false; // Väljastamine on blokeeritud

const result11 = OrderReady && (CourierAvailable || PickupPointAvailable) && !Blocked; // kontrollime, kas tellimust saab kätte
console.log("Kas tellimust saab kätte? " + result11); // Väljasta tulemus   

