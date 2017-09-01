import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Proposition } from '../../model/proposition';
import { Scrutin } from '../../model/scrutin';

import { ScrutinApiService } from '../../services/api/scrutinApi.service';
import { SharedService } from '../../services/shared.service';

import { $ } from "jquery";

@Component({
  selector: 'app-vote',
  templateUrl: './votePoll.component.html',
  styleUrls: ['./votePoll.component.sass']
})
export class VotePollComponent implements OnInit {
  private pollId: string;
  private scrutin: Scrutin = new Scrutin;
  private buttonValue: String = "Voter";
  
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

  ngAfterViewInit(){
    
  }

  openDropdown(index: string) {
    $('.dropdown-button').dropdown('open');
  }

  selectGrade(proposition: Proposition, grade: string) {
    this.buttonValue = grade;
    console.log(proposition);
  }

}
