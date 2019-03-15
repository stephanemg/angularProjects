import {Component} from '@angular/core';
import {Personne} from './models/Personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableau: Personne[] = [{nom:'tom',prenom:'tom'}];
  nom;
  prenom;

  onAdd() {
    let p = new Personne(this.nom, this.prenom);
    this.tableau.push(p);
  }
  onDelete(i) {
    this.tableau.splice(i, 1);
  }
}
