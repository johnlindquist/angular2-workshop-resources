import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

const STARWARS_API = 'http://localhost:5000';

@Injectable()
export class StarWarsService{
    people;
    starships;
    vehicles;

    constructor(http:Http){
        this.people = http.get(`${STARWARS_API}/people`)
            .map(res => res.json());

        this.starships = http.get(`${STARWARS_API}/starships`)
            .map(res => res.json());

        this.vehicles = http.get(`${STARWARS_API}/vehicles`)
            .map(res => res.json());
    }
}