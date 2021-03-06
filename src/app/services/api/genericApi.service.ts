﻿// Imports
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from '../shared.service';

// Decorator to tell Angular that this class can be injected as a service to another class
export abstract class GenericApiService {

    protected MSG_CREATE_SUCCESS = "Enregistrement effectué";
    protected MSG_UPDATE_SUCCESS = "Enregistrement effectué";
    protected MSG_DELETE_SUCCESS = "Suppression effectuée";
    
    protected optionsApplicationJson = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    // Class constructor with Jsonp injected
    constructor(protected http: Http, protected sharedService: SharedService) {
    }

    // Base URL for Petfinder API
    protected apiUrl = "http://localhost:3000/";
    protected controllerName = "";

    get(): Observable<any[]> {
        this.sharedService.startLoading();
        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName)
            .map((res: Response) => this.manageSuccess(res))
            .catch((error: any) => this.manageError(error));
    }

    // get a pet based on their id
    getById(id: string): Observable<any> {
        this.sharedService.startLoading();

        // End point for list of pets:
        const endPoint = '/' + id;

        // Return response
        return this.http
            .get(this.apiUrl + this.controllerName + endPoint)
            .map((res: Response) => this.manageSuccess(res))
            .catch((error: any) => this.manageError(error));
    }
    update(id: any, obj: any, notification: boolean = true): Observable<any> {
        const endPoint = '/' + id;
        if (notification) {
            this.sharedService.startLoading();
            return this.http
                .put(this.apiUrl + this.controllerName + endPoint, obj)
                .map((res: Response) => this.manageSuccess(res, this.MSG_UPDATE_SUCCESS))
                .catch((error: any) => this.manageError(error));
        }
        else {
            return this.http
                .put(this.apiUrl + this.controllerName + endPoint, obj)
                .map((res: Response) => this.manageSuccess(res, null, false))
                .catch((error: any) => this.manageError(error));
        }
    }

    create(obj: any, notification: boolean = true): Observable<any> {
        const endPoint = '/';
        if (notification) {
            this.sharedService.startLoading();
            return this.http
                .post(this.apiUrl + this.controllerName + endPoint, obj)
                .map((res: Response) => this.manageSuccess(res, this.MSG_CREATE_SUCCESS))
                .catch((error: any) => this.manageError(error));
        }
        else {
            return this.http
                .post(this.apiUrl + this.controllerName + endPoint, obj)
                .map((res: Response) => this.manageSuccess(res, null, false))
                .catch((error: any) => this.manageError(error));
        }

    }

    delete(id: any): Observable<any> {
        this.sharedService.startLoading();
        const endPoint = '/' + id;

        return this.http
            .delete(this.apiUrl + this.controllerName + endPoint)
            .map((res: Response) => this.manageSuccess(res, this.MSG_DELETE_SUCCESS))
            .catch((error: any) => this.manageError(error));
    }

    manageError(error: any) {
        this.sharedService.endLoading();
        if (error.json &&  error.json() && error.json().ExceptionMessage) {
            this.sharedService.successToast(error.json().ExceptionMessage);
        }
        else {
            this.sharedService.errorToast('Erreur Serveur');
        }
        return Observable.throw( (error.json ? error.json().error : error) || 'Server error');
    }
    manageSuccess(res: Response, toastMsg?: string, splash: boolean = true) {
        if(splash)
            this.sharedService.endLoading();
        if (toastMsg) {
            this.sharedService.successToast(toastMsg);
        }
        return res.json();
    }
}