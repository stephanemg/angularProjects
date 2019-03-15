import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
onAjouterPersonne(form:NgForm) {
console.log(form.value["nom"]);
console.log(form.value["prenom"]);
}
}
