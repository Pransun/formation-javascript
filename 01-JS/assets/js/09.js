                                /*-----------------------------
                                        LES BOUCLES
                                ------------------------------*/        

 //-- La Boucle FOR

/**
 * Pour l'égale 0 : tant que i est strictement inférieur ou égale à 10; alors j'incrément 1 par pas de 1
 */


 for(let i = 0 ; i <= 10 ; i++) {
     document.write('<p> Instruction executée : <strong>'+ i +' </strong> </p>');
 }
                                

document.write('<hr>');

// Boucle While 
var j = 0;
/** Tant que j est strictement inférieur ou égale a 10; alors j'execute mes instruction puis j'increment j par pas de 1. */

while(j <= 10) {
    document.write('<p>Instruction excutée : <strong>' +j+ '</strong><p>');

    // ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++;
}


/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */


 document.write('<hr>');
 
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo']; 
for ( let i = 0; i < Prenoms.length; i++){ 
    console.log(Prenoms[i]); 
    document.write("<br />"+ Prenoms[i]); 
 } 
console.log('-----')
 
var  j = 0;
while(j < Prenoms.length) {
    console.log(Prenoms[j]);
    j++;
}

console.log('-----')

// Boucle ForEach
Prenoms.forEach(affichePrenom);
function affichePrenom(valeur, i) {
    console.log(i + ' ' + valeur);
}

// Boucle For OF
for(apotre of Prenoms) {
    console.log(apotre);
}

console.log('Reverse for -----');
// -- Boucle Inverse
for(let i = Prenoms.length; i--; ) {
    console.log(Prenoms[i]);
}

 /**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  * https://www.incredible-web.com/blog/performance-of-for-loops -with-javascript/
  */
 