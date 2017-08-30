import { Component, OnInit } from '@angular/core';
import { Proposition } from '../../model/proposition';

@Component({
  selector: 'app-create',
  templateUrl: './createPoll.component.html',
  styleUrls: ['./createPoll.component.css']
})
export class CreatePollComponent implements OnInit {
  private propositions: Array<Proposition>;
  private test: string;
  constructor() { }

  ngOnInit() {
    this.propositions = new Array<Proposition>();
    var p = new Proposition();
    p.Id = 1;
    p.Name = "première proposition";
    p.Description = "description de la première proposition";
    this.propositions.push(p);
    var p = new Proposition();
    p.Id = 2;
    p.Name = "deuxième proposition";
    p.Description = "description de la deuxième proposition";
    this.propositions.push(p);
  }

  addEmptyProposition(){
    let props = this.propositions
    setTimeout(function() {

      console.log("addEmptyProposition");
      var p = new Proposition();
      p.Id = 3;
      p.Name = "nouvelle proposition";
      p.Description = "";
      props.push(p);
    }, 10);
  }

}
