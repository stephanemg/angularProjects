import { Component,OnInit } from '@angular/core';
import { Appareil } from './models/Appareil';
import { AppareilService} from './services/appareil.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tabAppareil:Appareil[];
  // appareilService
  constructor(private appareilService:AppareilService){

  }
  ngOnInit(){
    this.tabAppareil = this.appareilService.tabAppareil;
  }
  onAllumer(){
    this.appareilService.switchAllOn();
  	
  }
  onEteindre(){
  	this.appareilService.switchAllOff();

  }


}
