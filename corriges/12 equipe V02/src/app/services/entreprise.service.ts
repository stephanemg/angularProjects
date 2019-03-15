import { Entreprise} from '../models/entreprise';

export class EntrepriseService {
	/*
	entreprise:any = {
		tabEquipe: [],
		tabPersonne: []
	};
	*/
	entreprise = new Entreprise();
	deleteEquipe(i:number){
		this.entreprise.tabEquipe.splice(i,1);
	}
}