import {Proposition} from './proposition';

export class Scrutin { constructor(){}
    Id: number;
    Titre: string;
    Public: boolean;
    Mode: ModeScrutin;
    DateCloture: Date;
    DateOuverture: Date;
    Description: string;
    Propositions: Proposition[];
}

export class ModeScrutin {
    Id: number;
    Nom: string;
}