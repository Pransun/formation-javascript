                        /*--------------------------------------
                                   LES SELECTEURS JQUERY
                        --------------------------------------*/        

 //overapi
 
 //--- Format : $('selecteur')
 // -- EN jQuery, tous les sélecteurs CSS qont disponibles...

 $(function() {
     l = e => console.log(e);
     // -- Sélectionner toutes les balise SPAN 
     l(document.getElementsByTagName('span'));
     l($('span'));

     // -- Sélectionner toutes les balise SPAN 
     l(document.getElementById('menu'));
     l($('#menu'));

     // -- Sélectionner un élément par sa classe...
     l(document.getElementsByClassName('MaClasse'));
     l($('.MaClasse'));

     //-- Selecteur un Attribut
     l($('[href="#"]'));
 });



                       