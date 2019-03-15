import { Component, OnInit } from '@angular/core';
import { Equipe } from './models/Equipe';
import { Personne } from './models/Personne';
import { EntrepriseService } from './services/EntrepriseService';
import { Entreprise } from './models/Entreprise';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private entrepriseService: EntrepriseService) { };

  ngOnInit(): void {
    this.entreprise = this.entrepriseService.entreprise;
  }
  entreprise: Entreprise;
  idEquipe: number;
  nomEquipe: string;
  nomPersonne: string;
  prenomPersonne: string;
  ajouteEquipe() {
    this.entrepriseService.ajouteEquipe(this.nomEquipe);
    this.nomEquipe = "";
  }
  onAjouterPersonne(form: NgForm) {
    console.log(form.value["nomPersonne"]);
    console.log(form.value["prenomPersonne"]);
    console.log(form.value["idEquipe"]);
    this.entrepriseService.ajoutePersonne(form.value["nomPersonne"], form.value["prenomPersonne"], form.value["idEquipe"]);
  }
  onDeletePersonne(idPersonne) {

    //on teste si la personne n'est pas dans une equipe.
    if (!this.entrepriseService.testePersonneEquipe(idPersonne)) {
      this.entrepriseService.deletePersonne(idPersonne);
    }
    else {
      alert('mon coco t"est pas virable !');
    }

  }
}
