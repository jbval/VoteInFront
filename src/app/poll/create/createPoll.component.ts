import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Proposition } from '../../model/proposition';
import { Scrutin,ModeScrutin } from '../../model/scrutin';

import { ScrutinApiService } from '../../services/api/scrutinApi.service';
import { ModeScrutinApiService } from '../../services/api/modeScrutinApi.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './createPoll.component.html',
  styleUrls: ['./createPoll.component.css']
})
export class CreatePollComponent implements OnInit {
  private poll: Scrutin = new Scrutin();
  private modesScrutin: Array<ModeScrutin>;
  
  constructor(private scrutinApiService:ScrutinApiService,
     private modeScrutinApiService:ModeScrutinApiService,
     private sharedService:SharedService) { }

  ngOnInit() {
    this.modeScrutinApiService.get().subscribe(
      res => {
        this.modesScrutin = res;
      },
      err => console.log(err)
    );
    this.poll.Propositions = new Array<Proposition>();
    this.poll.DateOuverture = new Date(Date.now());
    var p = new Proposition();
    p.Id = 0;
    p.Name = "première proposition";
    p.Description = "description de la première proposition";
    this.poll.Propositions.push(p);
    var p = new Proposition();
    p.Id = 0;
    p.Name = "deuxième proposition";
    p.Description = "description de la deuxième proposition";
    this.poll.Propositions.push(p);
  }

  onSubmit(f: NgForm) {
    if(f.valid){;
      this.scrutinApiService.create(this.poll).subscribe(
        res => {
          console.log("ok");
        }, 
        error =>{
          console.log("error");
        });
    }
  }

  addEmptyProposition(){
    var p = new Proposition();
    p.Id = 0;
    p.Name = "";
    p.Description = "";
    this.poll.Propositions.push(p);
  }

  removeProposition(prop:Proposition){
    var index = this.poll.Propositions.indexOf(prop, 0);
    if (index > -1) {
      this.poll.Propositions.splice(index, 1);
    }
  }

  updateModeScrutin(mode:ModeScrutin){
    this.poll.Mode = mode;
  }

  isLoading(){
    return this.sharedService.loading;
  }
}
