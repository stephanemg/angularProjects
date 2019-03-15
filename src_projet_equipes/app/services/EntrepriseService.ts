import { Equipe } from '../models/Equipe';
import { Personne } from '../models/Personne';
import { Entreprise } from '../models/Entreprise';

export class EntrepriseService {
    seqIdPersonne: number = 0;
    seqIdEquipe: number = 0;
    entreprise = new Entreprise();
    deleteEquipe(index: number) {
        this.entreprise.tabEquipe.splice(index, 1);
    }
    ajoutePersonne(nomPersonne, prenomPersonne, idEquipe) {
        let personne = new Personne(nomPersonne, prenomPersonne, this.seqIdPersonne++);
        //affectation de la personne a une equipe
        //on recupere l'equipe via son id
        function testeIdEquipe(element: Equipe) {
            return element.idEquipe == this;
        }
        let equipe = this.entreprise.tabEquipe.find(testeIdEquipe, idEquipe);
        equipe.personnes.push(personne);
        //on ajoute la personne dans le tableau global
        this.entreprise.tabPersonne.push(personne);
    }
    ajouteEquipe(nomEquipe) {
        let equipe = new Equipe(nomEquipe, this.seqIdEquipe++);
        this.entreprise.tabEquipe.push(equipe);

    }
    retirePersonneEquipe(equipe: Equipe, idPersonne: number) {
        function testIdPersonne(element: Personne) {
            return element.idPersonne == this;
        }
        let indexPersonne = equipe.personnes.findIndex(testIdPersonne, idPersonne);
        equipe.personnes.splice(indexPersonne, 1);
    }
    testePersonneEquipe(idPersonne: number) {
        function testIdPersonne(element: Personne) {
            return element.idPersonne == this;
        }
        for (let equ of this.entreprise.tabEquipe) {
            let indexPersonne = equ.personnes.findIndex(testIdPersonne, idPersonne);
            if (indexPersonne != -1) {
                return true;
            }
        }
        return false;
    }
    deletePersonne(idPersonne) {
        function testIdPersonne(element: Personne) {
            return element.idPersonne == this;
        }
        let indexPersonne = this.entreprise.tabPersonne.findIndex(testIdPersonne, idPersonne);
        if (indexPersonne != undefined) {
            this.entreprise.tabPersonne.splice(indexPersonne, 1);
        }
    }
}