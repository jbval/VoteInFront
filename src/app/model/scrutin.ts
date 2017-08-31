import {Proposition} from './proposition';

export class Scrutin { constructor(){}
    Id: number;
    Titre: string;
    Public: boolean;
    Mode: ModeScrutin;
    DateCloture: Date;
    DateOuverture: Date;
    Description: string;
    ModeScrutin: ModeScrutin;
    Propositions: Proposition[];
}

export class ModeScrutin {
    Id: number;
    Nom: string;
}

export class ModeScrutinAvecChoix extends ModeScrutin {
    Choix: Choix[];
}

export class Choix {
    Id: number;
    Nom: string; // nom du choix ( = exelent dans le cas d'un mode de scrutin majoritaire)
    Valeur: number; // détermine l'importance du choix (0 = null 7 = très bien dans le cas d'un mode de scrutin majoritaire)
}