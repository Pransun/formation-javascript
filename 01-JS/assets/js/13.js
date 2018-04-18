                         /*----------------------------------------------------------------------
                         ________________________________________________________________________                          
                                                       
                                                        -LE DOM-                                 
                         ________________________________________________________________________
                      


Le DOM est une interface de dévéloppement en JS pour HTML. Grace au DOM je vais être en mesure d'accéder ou modifier mon HTML.

L'Objet "document", c'est le point d'entrée vers mon contenu HTML.
Chaque page chargée dans mon navigateur à un objet "document".*/

/**
 * Comment puis-je faire pour récupérer les différente informations de ma page HTML ?
 */
                         /*________________________________________________________________________

                                ~~~~~~~~~~~~~~~~~  document.getElementById~~~~~~~~~~~~~~~~~~

document.getElementById() est une fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : ID
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);

                             /*________________________________________________________________________

                                ~~~~~~~~~~~~~~~~~  document.getElementsByClassName~~~~~~~~~~~~~~~~~~

 document.getElementsByClassName() : c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe   
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/      
 
 var contenu = document.getElementsByClassName('contenu'); 
 console.log(contenu);

 // --- Me renvoi un tableau JS avec mes éléments HTML (Collection HTML).


                                 /*________________________________________________________________________

                                     ~~~~~~~~~~~~~~~~~  document.getElementsByTagName~~~~~~~~~~~~~~~~~~

document.getElementByTagName :  c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur * nom de balise * 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var span = document.getElementsByTagName('span'); 
console.log(span);