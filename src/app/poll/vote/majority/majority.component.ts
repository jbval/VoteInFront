import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Scrutin, Proposition, ScrutinMajoritaire, VoteMajoritaire, Choix, PropositionChoix } from '../../../model/model';

import { ScrutinApiService } from '../../../services/api/scrutinApi.service';
import { SharedService } from '../../../services/shared.service';

import { $ } from "jquery";

@Component({
  selector: 'app-majority',
  templateUrl: './majority.component.html',
  styleUrls: ['./majority.component.sass']
})
export class MajorityComponent implements OnInit {
  private pollId: string;
  private scrutin: Scrutin = new Scrutin;
  private VoteMajoritaire: VoteMajoritaire = new VoteMajoritaire(this.scrutin, new Array<PropositionChoix>());

  constructor(private activatedRoute: ActivatedRoute, private scrutinApiService:ScrutinApiService, private sharedService:SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.pollId = params['id'];
      this.scrutinApiService.getById(this.pollId).subscribe(
        res => {
          this.scrutin = res;
        });
    })
  }

  selectedGrade(proposition: Proposition, choix: Choix) {
    let a = new PropositionChoix(proposition.id, choix.id)
    this.VoteMajoritaire.PropositionChoix.push(a)
  }

  getLabelGrade(proposition: Proposition) {
    let label = "voter";
    if (this.VoteMajoritaire.PropositionChoix != null) {
      for (let propositionChoix of this.VoteMajoritaire.PropositionChoix) {
        if (propositionChoix.propositionId == proposition.id) {
          let scrutinMajoritaire = <ScrutinMajoritaire> this.scrutin.mode;
          label = scrutinMajoritaire.choix[propositionChoix.choixId].nom
        }
      }
    }
    return label;
  }



}
