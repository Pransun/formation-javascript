/*----------------------------------------
        LA CONCATENATION
----------------------------------------*/

/**
 * Aujourd'hui 16/04/2018, sont present 12 apprenants.
 */

 var DebutDePhrase = "Aujourd'hui ";
 var DateDuJour = new Date();
 var SuiteDePhrase = ", sont presents : ";
 var NbApprenants = 12;
 var FinDePhrase = " apprenants.<br>";

 /**
  * Nous souhaitons maintenant, grâce à la concatenation, afficher tout ce petit monde en un seule morceau.
  */

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NbApprenants + FinDePhrase); 

 /* ----------------------------------------------------------
  EXERCICE :
  Créez une concaténation à partir des éléments suivants :  
---------------------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "XXXX et j'ai ";
var age     = "XX";
var phrase3 = " ans !";
document.write(phrase1 + phrase2 + age + phrase3 + "<br>");