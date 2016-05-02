import {Component} from 'angular2/core';
import {StarWarsService} from '../services/starwars.service';

@Component({
    selector: 'home',
    template: `
        <h2>People</h2>
        <div *ngFor="let person of starwarsService.people | async">
        {{person.name}}
      </div>
      
      <h2>Starships</h2>
        <div *ngFor="let starship of starwarsService.starships | async">
        {{starship.name}}
      </div>
      
      <h2>Vehicles</h2>
        <div *ngFor="let vehicle of starwarsService.vehicles | async">
        {{vehicle.name}}
      </div>
    `
})
export class Home{
    constructor(public starwarsService:StarWarsService){}
}
