import { Component, OnInit } from '@angular/core';
import { Proposition } from '../../model/proposition';
import { Scrutin } from '../../model/scrutin';
import { NgForm } from '@angular/forms';
import { ScrutinApiService } from '../../services/api/scrutinApi.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './createPoll.component.html',
  styleUrls: ['./createPoll.component.css']
})
export class CreatePollComponent implements OnInit {
  private title: string;
  private propositions: Array<Proposition>;
  private dateCloture: Date;
  private description: string;
  
  constructor(private scrutinApiService:ScrutinApiService, private sharedService:SharedService) { }

  ngOnInit() {
    this.propositions = new Array<Proposition>();
    var p = new Proposition();
    p.Id = 0;
    p.Name = "première proposition";
    p.Description = "description de la première proposition";
    this.propositions.push(p);
    var p = new Proposition();
    p.Id = 0;
    p.Name = "deuxième proposition";
    p.Description = "description de la deuxième proposition";
    this.propositions.push(p);
  }

  onSubmit(f: NgForm) {
    if(f.valid){
      let scrutin = new Scrutin();
      scrutin.Title = this.title;
      scrutin.Description = this.description;
      scrutin.DateCloture = this.dateCloture;
      scrutin.Propositions = this.propositions;
      this.scrutinApiService.create(scrutin).subscribe(
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
    this.propositions.push(p);
  }

  removeProposition(prop:Proposition){
    var index = this.propositions.indexOf(prop, 0);
    if (index > -1) {
      this.propositions.splice(index, 1);
    }
  }

  isLoading(){
    return this.sharedService.loading;
  }
}
