import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-random';
  response;
  count = 5;
  classe;
  essais;
  num = Math.round(Math.random()*100+1);
  entry;
  onGuess() {
    this.count--;
    console.log(this.num);
    if (this.count > 0) {
      if (this.entry < this.num) {
        this.affecteReponse("Valeur trop faible", true);
      }
      else if (this.entry > this.num) {
        this.affecteReponse("Valeur trop grande", true);
      }
      else {
        this.affecteReponse("c'est gagné", false);
      }
    }
    else {
      this.affecteReponse("C'est perdu, rejoue encore", false);
      this.count = 5;
      this.init();
    }
  }
  init() {
    this.num = Math.round(Math.random()*100+1);
  }
  affecteReponse(response, essais) {
    if (essais = true) {
      this.response = response;
      this.essais = 'Il reste ' + this.count + " essais";
    }
    else {
      this.response = response;
    }
  }
}
