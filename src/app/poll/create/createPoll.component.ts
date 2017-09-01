import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Proposition, Scrutin, ModeScrutin } from '../../model/model';

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
		private sharedService:SharedService,
		private router:Router) { }

	ngOnInit() {
		this.modeScrutinApiService.get().subscribe(
			res => {
				this.modesScrutin = res;
			},
			err => console.log(err)
		);
		this.poll.propositions = new Array<Proposition>();
		var p = new Proposition();
		p.id = 0;
		p.nom = "première proposition";
		p.description = "description de la première proposition";
		this.poll.propositions.push(p);
		var p = new Proposition();
		p.id = 0;
		p.nom = "deuxième proposition";
		p.description = "description de la deuxième proposition";
		this.poll.propositions.push(p);
	}

	onSubmit(f: NgForm) {
		if(f.valid){;
			this.scrutinApiService.create(this.poll).subscribe(
				res => {
					this.router.navigate(["poll"])
				}, 
				error =>{
					console.log("error");
				});
		}
	}

	addEmptyProposition(){
		var p = new Proposition();
		p.id = 0;
		p.nom = "";
		p.description = "";
		this.poll.propositions.push(p);
	}

	removeProposition(prop:Proposition){
		var index = this.poll.propositions.indexOf(prop, 0);
		if (index > -1) {
			this.poll.propositions.splice(index, 1);
		}
	}

	updateModeScrutinById(modeId:number){
		this.poll.mode = this.modesScrutin.filter(m => m.id == modeId)[0];
	}

	isLoading(){
		return this.sharedService.loading;
	}

	
}
