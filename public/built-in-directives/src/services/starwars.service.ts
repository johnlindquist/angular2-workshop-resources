import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

const STARWARS_API = 'http://localhost:5000';

@Injectable()
export class StarWarsService{
    people = this._http.get(`${STARWARS_API}/people`)
            .map(res => res.json());    
    
    starships = this._http.get(`${STARWARS_API}/starships`)
            .map(res => res.json());

    vehicles = this._http.get(`${STARWARS_API}/vehicles`)
            .map(res => res.json());

    constructor(private _http:Http){}
}