import {Component} from 'angular2/core';
import {Person} from './components/person.component';

@Component({
    selector: 'home',
    directives: [Person],
    template: `
        <ul>
            <li *ngFor="#person of people">
                {{person.name}}
            </li>
        </ul>
        
        <person 
            *ngFor="#person of people" 
            [name]="person.name">            
        </person>
    `
})
export class Home {
    people = [
        {name: "Sally"},
        {name: "James"},
        {name: "Percy"},
        {name: "Claire"},
        {name: "Izzie"}
    ];
}
