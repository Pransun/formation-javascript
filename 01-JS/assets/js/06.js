/*-------------------------------------------
                LES FONCTIONS 
-------------------------------------------*/

/**
 * Déclarer une fonction 
 * NB : cette fonction ne retourne aucune valeur et ne prend pas de parametres.
 */

function Bonjour() {
   
    alert('Bonjour !');
}
    /**
     * Je vais executer ma fonction "Bonjour" et déclencher ses instructions.
     */
    Bonjour();

    /**
     * Déclarer une fonction qui prend des variables en parametre.
     * @param {string} Prenom
     * @param {string} Nom
     */
  
function ditBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>"+ Prenom + " " + Nom + "</strong> ! </p>");
}
/**Appeler / Executer une function avec des paramètre. */
ditBonjour("Pransun", "SUN");

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */
/*function addition(nb1, nb2) {
    var nb1, nb2, resultat;
resultat = nb1 + nb2
    document.write("<p>Bonjour <strong>"+ resultat + "</strong> ! </p>");
}
addition(5,2);
*/
function addition(nb1, nb2) {
    return nb1 + nb2;
}
document.write("<p>" + addition(10, 5) + "</p>");