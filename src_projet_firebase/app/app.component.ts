import { Component, OnInit } from '@angular/core';
import { PersonneService } from './services/personne.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //on souscrit a la personne mise dans le subject
    this.personneSubscription = this.personneService.personneSubject.subscribe(
      //des que personne recue, elle est mise dans le component
      (p: any) => { this.personne = p; }
    );
    //on met la personne dans le subject pour envoi
    this.personneService.emitPersonneSubject();
  }
  personne: any;
  //objet pour gestion asynchrone de la personne
  personneSubscription: Subscription;
  constructor(private personneService: PersonneService) { };
  onSave() {
    this.personneService.ecrire();
  }
  onLoad() {
    this.personneService.lire();
  }
}
