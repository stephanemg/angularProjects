import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  poids:string;
  taille:string;
  imc:number;

  calcImc() {
    //  alert('called');
    let p = Number.parseFloat(this.poids);
    let t = Number.parseFloat(this.taille);
    const val = Math.round(p / (t * t));
    if (!isNaN(val)) {

    console.log('imc = ' + val);
    if (val < 18.5) {
      this.imc = 'maigreur';
    } else if (val > 25) {
      this.imc = 'surpoids';
    } else {
      this.imc = 'normal';
    }
  } else {
      this.imc="";
    }
}


}
