import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class ListService extends BaseService{
    public header: any;
    public path: string;
    constructor( readonly http: HttpClient ) {
        super(http);
    }
    
    getTechnologyList() {
        return this.get('/techs');
    }
}