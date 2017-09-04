import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Scrutin, Proposition, VoteProportionnel, Vote } from '../../../model/model';

import { VoteApiService } from '../../../services/api/voteApi.service';
import { ScrutinApiService } from '../../../services/api/scrutinApi.service';
import { SharedService } from '../../../services/shared.service';

import { $ } from "jquery";

@Component({
  selector: 'app-proportional',
  templateUrl: './proportional.component.html',
  styleUrls: ['./proportional.component.sass']
})
export class ProportionalComponent implements OnInit {
  private pollId: string;
  private scrutin: Scrutin = new Scrutin;
  private voteProportionnel: VoteProportionnel;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private scrutinApiService:ScrutinApiService, private voteApiService: VoteApiService, private sharedService:SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.pollId = params['id'];
      this.scrutinApiService.getById(this.pollId).subscribe(
        res => {
          this.scrutin = res;
        });
    })
  }

  selectCandidate(proposition: Proposition) {
    this.voteProportionnel = new VoteProportionnel(this.scrutin, proposition)
  }

  vote(voteProportionnel: VoteProportionnel) {
    this.voteApiService.create(voteProportionnel).subscribe(
      res => {
        this.route.navigate(['poll']);
      });
  }

  isSelected(proposition: Proposition) {
    if (this.voteProportionnel != null) {
      return proposition.id == this.voteProportionnel.proposition.id  
    }
    return false
  }

  isVote() {
    return this.voteProportionnel == null;
  }
}
