/**
 * Pour déclarer une classe comme composant de notre application on importe "component"
 * depuis @angular/core
 */
import {Component, OnInit} from '@angular/core';
import { Contact} from './models/contacts';

/**
 * Décorateur (décorateur) qui permet de préciser à angular quel html et css utiliser pour le modèle
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la manière dont le composant sera affiché    * dans votre html : <app-root></app-root>.
   * vous devez OBLIGATOIREMENT avoir la balise d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template est la partie visible
   * du composant. C'est ce qui s'affiche à l'écran
   * lorsque le composant est utilisé.
   */
  /*template:`
  <h1>Bienvenue aux Mureaux...</h1>
  <h3>Notre ville à du Talent !</h3>`,*/
   templateUrl: './app.component.html',
  /**
   * La déclaration des styles avec "styleUrls" ou "styles"
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au  ViewModel.
 */
export class AppComponent implements OnInit {
  constructor(private ) { }
  // -- Déclaration d'une Variable Titre
  title = 'Gestion de mes Contacts';
  //-- Contact choisi par mon utilisateur
  contactActif: Contact;
  // -- Déclaration d'un objet Contact
  unContact = {
    id : 1,
    name : 'Pransun Sun',
    username : 'Anirud',
    email : 'wf3@hl-media.fr'
  };
  mesContacts: Contact[] = [
    {
      id        :   1,
      name      : 'Pransun Sun',
      username  : 'anirud',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        :   2,
      name      : 'Greg D\'HAEM',
      username  : 'gregdhaem',
      email     : 'greg.d@hl-media.fr'
    },
    {
      id        :   3,
      name      : 'Salim SOUMARE',
      username  : 'salimsoumare',
      email     : 'salim.s@hl-media.fr'
    },
    {
      id        :   4,
      name      : 'Cheffia BENALLAL',
      username  : 'cheffiabennallal',
      email     : 'cheffia.b@hl-media.fr'
    }
  ];

  /**
   * Ma fonction choisir Conctact , prend un contact en paramètre et le transmet à la variable contactActif.
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur){
  this.contactActif = contactCliqueParMonUtilisateur;
  console.log(this.contactActif);
}

  ajouterContactDansListe(event: any) {
    console.log(event);
// --Récupération du Contact via l'Evenement.
    const leContact: Contact = event.leContact;
    //-- Attribtuion d'un ID au contact
    leContact.id = Date.now();
  //--Ajout du Contact dans le Tableau
    this.mesContacts.push(leContact);
  }

  /**
   * La méthode ngOnInit est appelée automatiquement par Angular à l'initialisation de notre composant.
   */
  ngOnInit(): void {

  }
}


