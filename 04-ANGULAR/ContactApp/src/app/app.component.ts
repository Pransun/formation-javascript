/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core
 */
import { Component } from '@angular/core';
class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  adress?: object;
  phone?: number;
  company?: object;
}

/**
 * @Component est ce qu'on appelle un décorateur il va nous permettre de définir 1 parametres essentiels à notre application
  */

@Component({

  /**
   * Le selecteur (selector) d"termine la maniere dont le compsant sera affiche dans votre HTML : app root> <app root>.
   * douverture et de fermeture
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template est la partie visible
   * du composant. C'est ce qui s'affiche à l'écran
   * lorsque le composant est utilisé.
   */

  templateUrl: './app.component.html',
    /**
    * La déclaration des styles avec "styleUrls" ou "styles"
    */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant, mais aussi
 * son comportement.
 * Dans le contexte MVVM, notre classe correspond au ViewModel.
 */
export class AppComponent {
  // Déclaration d'une variable Titre
  title = 'Gestion de mes Contacts';
// -- Déclaration d'un Objet Contact
  unContact = {
    id: 1,
    name: 'Pransun Sun',
    username: 'Anirud',
    email: 'sun78@psun.fr'
  };
  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Pransun Sun',
      username: 'Anirud',
      email: 'sun78@psun.fr'
    },
    {
      id: 2,
      name: 'Greg D\'HAEM',
      username: 'gregdhaem',
      email: 'greg.d@hl-media.fr'
    },
    {
      id: 3,
      name: 'Salim SOUMARE',
      username: 'salimsoumare',
      email: 'salim.s@hl-media.fr'
    },
    {
      id: 4,
      name: 'Cheffia BENALLAL',
      username: 'cheffiabennallal',
      email: 'cheffia.b@hl-media.fr'
    }
  ];
  /**
  * Permet de définir un contact actif
* @param {Contact} UnContact
*/
  /**
   * Ma fonction choisir Conctact , prend un contact en paramètre et le transmet à la variable contactActif.
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);

  }
}
