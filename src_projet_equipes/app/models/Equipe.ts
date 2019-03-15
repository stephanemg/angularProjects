import { Personne } from './Personne';

export class Equipe {
    personnes: Personne[];
    constructor(public nomEquipe: string, public idEquipe:number) {
        this.personnes = [];
    }
    
    
}