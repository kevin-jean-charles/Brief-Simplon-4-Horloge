// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


//Extraire l'heure actuel à l'aide de l'objet Date()
let heureActuel = new Date();
console.log(heureActuel); 

//Stocker l'heure , minute , seconde  dans des varaiables
let heures = heureActuel.getHours();
let minutes = heureActuel.getMinutes();
let seconds = heureActuel.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


//Conversion en des minutes et heures en seconds
let minutesEnSeconds = minutes * 60;
let heuresEnSeconds =  heures * 3600;



//Rotation en degre par second
let degParSecond = 360/60;  //6° 
let degParMinute = 360/(60*60);  //0.1°
let degParHeure = 360/(12*60*60);  //0.083°


//Valeur de la position des aiguilles
let aiguilleSecond = seconds * degParSecond;
let aiguilleMinute = minutesEnSeconds * degParMinute;
let aiguilleHeure = heuresEnSeconds * degParHeure;


AIGUILLESEC.style.transform = "rotate("+ aiguilleSecond +"deg)";
AIGUILLEMIN.style.transform = "rotate("+ aiguilleMinute +"deg)";
AIGUILLEHR.style.transform = "rotate("+ aiguilleHeure +"deg)";

  
//Déplacer les aiguilles 
function demarrerLaMontre() {
  aiguilleSecond += degParSecond;
  aiguilleMinute += degParMinute;
  aiguilleHeure += degParHeure;
  AIGUILLESEC.style.transform = "rotate("+ aiguilleSecond +"deg)";
  AIGUILLEMIN.style.transform = "rotate("+ aiguilleMinute +"deg)";
  AIGUILLEHR.style.transform = "rotate("+ aiguilleHeure +"deg)";
}


//Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
