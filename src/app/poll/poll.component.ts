import { Component, OnInit } from '@angular/core';
import { Scrutin } from '../model/model';

import { ScrutinApiService } from '../services/api/scrutinApi.service';
import { ModeScrutinApiService } from '../services/api/modeScrutinApi.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  private pollList:Scrutin[];

  constructor(private scrutinApiService:ScrutinApiService) {}

  ngOnInit() {
    this.scrutinApiService.get().subscribe(
      res => {
        this.pollList = res;
      });
  }

  paginate(pageNumber:number){
    
  }

}
