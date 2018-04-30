import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../models/contacts';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
