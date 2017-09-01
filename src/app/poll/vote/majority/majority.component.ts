import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Scrutin, Proposition, VoteMajoritaire, Choix, PropositionChoix } from '../../../model/model';

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
  private buttonValue: String = "Voter";
  //private voteComplexe: VoteComplexe
  
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

  selectGrade(proposition: Proposition, choix: Choix) {
    //this.buttonValue = grade;
    //this.voteComplexe.Acte.Choix = choix;
    console.log(proposition);
  }

}
