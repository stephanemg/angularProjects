import { Appareil } from '../models/Appareil';
export class AppareilService {
    appareils: Appareil[] = [];
    constructor() {
        this.appareils = [{ appareilName: 'TV', appareilStatus: 'allumé' },
        { appareilName: 'Xbox', appareilStatus: 'allumé' },
        { appareilName: 'Playstation', appareilStatus: 'allumé' }];
    }
    switchAllOn() {
        for (let a of this.appareils) {
            a.appareilStatus = "allumé";
        }
    }
    switchAllOff() {
        for (const a of this.appareils) {
            a.appareilStatus = "éteint";
        }
    }
    switchOn(index) {
        this.appareils[index].appareilStatus = "allumé";
    }
    switchOff(index) {
        this.appareils[index].appareilStatus = "éteint";
    }
}