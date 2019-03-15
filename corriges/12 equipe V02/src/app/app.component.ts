import { Component , OnInit} from '@angular/core';
import { Equipe } from './models/Equipe';
import { EntrepriseService} from './services/entreprise.service';
import { Entreprise } from './models/entreprise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nomEquipe:string;
  entreprise:Entreprise;

  constructor(private entrepriseService:EntrepriseService){

  }
  ngOnInit(){
    this.entreprise = this.entrepriseService.entreprise;
  }
  onAjouterEquipe(){

  	let nom = this.nomEquipe;
  	this.nomEquipe=''; // je vide le champ input
  	let e = new Equipe(nom);
    this.entreprise.tabEquipe.push(e);
  	
  }
}
