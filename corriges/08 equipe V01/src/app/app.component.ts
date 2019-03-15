import { Component } from '@angular/core';
import { Equipe } from './models/Equipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nomEquipe:string;
  tabEquipe:Equipe[]=[];

  onAjouterEquipe(){

  	let nom = this.nomEquipe;
  	this.nomEquipe='';
  	let e = new Equipe(nom);
  	this.tabEquipe.push(e);
  }
}
