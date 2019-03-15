import { Component, OnInit } from '@angular/core';
import { Appareil } from './models/Appareil';
import { AppareilService } from './services/AppareilService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }
  appareils: Appareil[];
  constructor(private appareilService:AppareilService){
  }
  onAllumer() {
   this.appareilService.switchAllOn();
  }
  onEteindre() {
    this.appareilService.switchAllOff();
  }
}
