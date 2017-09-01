import { Component, OnInit } from '@angular/core';
import { Scrutin } from '../model/model';
import { Router }from '@angular/router';

import { ScrutinApiService } from '../services/api/scrutinApi.service';
import { ModeScrutinApiService } from '../services/api/modeScrutinApi.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.sass']
})
export class PollComponent implements OnInit {
  private pollList:Scrutin[];

  constructor(private scrutinApiService:ScrutinApiService,
    private router:Router) {}

  ngOnInit() {
    this.scrutinApiService.get().subscribe(
      res => {
        this.pollList = res;
      });
  };
}
