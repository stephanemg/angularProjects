import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

 	tab:any[] = [];
	
	ngOnInit() {
		for(let i= 0;i <32;i++){
			this.tab[i]=i;
		}
	}
}
