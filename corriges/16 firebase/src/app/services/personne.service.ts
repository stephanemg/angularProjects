import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonneService{
	private personne:any= {
		nom:'DOE', prenom:'John'
	};
	personneSubject = new Subject();

	constructor(private httpClient: HttpClient) {
  	}

	emitPersonneSubject() {
    	this.personneSubject.next(this.personne);
  	}
	
	lire(){
		this.httpClient
      .get<any>('https://gestion-equipe.firebaseio.com/acteur.json')
      .subscribe(
        (response) => {
          this.personne = response;
          this.emitPersonneSubject();
          console.log('lecture OK !');
        }, (error) => {
          console.log('error');
        }
      );
		
	}
	ecrire(){
		let url = 'https://gestion-equipe.firebaseio.com/acteur.json';
		this.httpClient
      .put(url, this.personne)
      .subscribe(
        () => {
          console.log('envoie OK !');
        }, (error) => {
          console.log('error');
        }
      );
	}

}