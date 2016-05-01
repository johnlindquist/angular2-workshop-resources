import {Component} from 'angular2/core';
import {Dumb} from './components/dumb.component';

@Component({
    selector: 'smart',
    directives: [Dumb],
    template: `
    <dumb [message]="memo" (open)="onOpen($event)"></dumb>    
`
})
export class Smart{
    onOpen(event){
        console.log(event);
    }
    
    memo = "You've got mail";
}
