import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contacts';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  @Output()unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active = true;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée après le submit du Formulaire
   */
  submitContact() {
    /**
     * Lorsque mon formulaire est soumis, j'emet un événement qui sera écouté par mon application; et qui récupérera les données du nouveau contact
     */
    this.unContactEstCree.emit({ leContact: this.nouveauContact });
  //-- Réinitialiser le Nouveau contact
    this.nouveauContact = new Contact();
    //-- Réinitialisation du formulaire
   this.active = false;
    setTimeout( () =>this.active = true, 0);
}
