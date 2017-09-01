

export class Proposition { constructor(){}
    id: number;
    name: string;
    description: string;
}

export class Scrutin { constructor(){}
    id: number;
    titre: string;
    public: boolean;
    mode: ModeScrutin;
    dateCloture: Date;
    dateOuverture: Date;
    description: string;
    propositions: Proposition[];
}

export class ModeScrutin {
    id: number;
    nom: string;
}

export class ModeScrutinComplexe extends ModeScrutin{
    choix: Choix[]; // les choix POSSIBLE pour chaques propositions d'un scrutin (ex: NUL, MOYEN, EXELENT)
}

export class Choix {
    id: number;
    nom: string; // nom du choix ( = exelent dans le cas d'un mode de scrutin majoritaire)
    valeur: number; // détermine l'importance du choix (0 = null 7 = très bien dans le cas d'un mode de scrutin majoritaire)
}

export abstract class Vote {
    scrutin: Scrutin;
    scrutinId: number;
}

export class VoteProportionnel extends Vote {
    //proposition: Proposition;
    propositionId: number;
}

export class VoteMajoritaire extends Vote {
    choix: PropositionChoix[]; // les choix relatif au scrutin => (pour x: choix[x] correpond au choix de la proposition scrutin.propositions[x])
}

export class PropositionChoix {
    //proposition: Proposition;
    propositionId: number;
    //choix: Choix;
    choixId: number;
}