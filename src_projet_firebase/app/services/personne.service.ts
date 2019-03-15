import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
//service pour transport de l'objet de facon asynchrone / firebase api rest
export class PersonneService {
    //url compte firebase database
    private url = "https://angular-782be.firebaseio.com/";
    private personne: any = {
        nom: 'DOE',
        prenom: "John"
    };
    personneSubject = new Subject();

    constructor(private httpClient: HttpClient) { };

    //on met la personne a disposition dans le subject
    emitPersonneSubject() {
        this.personneSubject.next(this.personne);
    }
    lire() {
        this.httpClient.get<any>(this.url + '/acteur.json')
            .subscribe(
                (response) => {
                    this.personne = response;
                    this.emitPersonneSubject();
                    console.log('lecture ok');
                }, (error) => {
                    console.log('erreur lire');
                }

            );
    }
    //au niveau du noeud acteur.json j'enregistre ma personne
    ecrire() {
        this.httpClient.put(this.url + 'acteur.json', this.personne)
            .subscribe(
                () => {
                    console.log('envoi OK');
                },
                () => {
                    console.log('erreur !');
                }
            );
    }
}