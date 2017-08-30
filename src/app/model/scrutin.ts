import {Proposition} from './proposition';

export class Scrutin { constructor(){}
    Id: number;
    Title: string;
    DateCloture: Date;
    Description: string;
    Propositions: Proposition[];
}