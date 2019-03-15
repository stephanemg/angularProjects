import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mot = 'bonjour';
  info= '';

  getInfo(){
  	return 'OLA!'!;
  }	
  onAction(){
  	this.mot=this.info;
    this.info='';
    //this.mot='toto';
  	console.log('clique!');
  }	  
}
