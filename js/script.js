// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


//Extraire l'heure actuel à l'aide de l'objet Date()
let heureActuel = new Date();
console.log(heureActuel); 

//Stocker l'heure , minute , seconde  dans des varaiables
let heure = heureActuel.getHours();
let minute = heureActuel.getMinutes();
let second = heureActuel.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


//Degre temps
let degParSecond = 360/60;  //6° pas sec
let degParMinute = 360/(60*60); //0.1° deg min
let degParHeure = 360/(12*60*60); //0.083° deg/heure

//Convertion en second
let secondEnSecond = degParSecond*second;
let minuteEnSecond = degParMinute*(minute*60) + (second/60);
let heureEnSecond = degParHeure*(heure*3600) + degParMinute*(minute/60) + degParSecond*(second/3600);  

AIGUILLESEC.style.transform = "rotate("+ secondEnSecond +"deg)";
AIGUILLEMIN.style.transform = "rotate("+ minuteEnSecond +"deg)";
AIGUILLEHR.style.transform = "rotate("+ heureEnSecond +"deg)";
  
// Déplacer les aiguilles 
function demarrerLaMontre() {
  secondEnSecond += degParSecond;
  minuteEnSecond += degParMinute;
  heureEnSecond += degParHeure
  AIGUILLESEC.style.transform = "rotate("+ secondEnSecond +"deg)";
  AIGUILLEMIN.style.transform = "rotate("+ minuteEnSecond +"deg)";
  AIGUILLEHR.style.transform = "rotate("+ heureEnSecond +"deg)";
}


// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
