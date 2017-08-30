import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, BehaviorSubject } from 'rxjs/Rx';
import { MaterializeModule } from 'angular2-materialize';

declare var Materialize: any;

@Injectable()
export class SharedService {
    //Loading screen
    public loading: boolean = false;
    public countLoading: number = 0;

    //Reception de messages globaux
    public onMessageGlobal = new Subject<string>();

    constructor() {
        this.loading = false;
    }

    startLoading() {
        this.countLoading++;
        //console.log(this.countLoading, '++');
        setTimeout(() => {
            this.loading = true;
        }, 0);
    }
    endLoading() {
        this.countLoading = Math.max(0, this.countLoading - 1);
        //console.log(this.countLoading, '--');
        if (this.countLoading == 0) {
            setTimeout(() => {
                this.loading = false;
            }, 0);
        }
    }

    //Toastr
    successToast(txt: string, title?: string) {
        Materialize.toast(txt);
    }
}