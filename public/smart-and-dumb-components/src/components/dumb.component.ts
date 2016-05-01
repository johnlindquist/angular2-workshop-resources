import {Component, Output, Input, EventEmitter} from 'angular2/core';

@Component({
    selector: 'dumb',
    template: `
    <button (click)="onClick()">{{message}}</button>
    
`
})
export class Dumb{
    @Input() message;
    @Output() open = new EventEmitter();

    onClick(){
        this.open.emit('message opened!');
    }
}