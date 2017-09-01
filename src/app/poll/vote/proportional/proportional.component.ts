import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Scrutin, Proposition, ScrutinMajoritaire, VoteMajoritaire, Choix, PropositionChoix } from '../../../model/model';

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
}
