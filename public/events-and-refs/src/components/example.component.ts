import {Component} from 'angular2/core';

@Component({
    selector: 'example',
    template: `
            <input #myInput type="text">
            <button (click)="onClick(myInput.value)">Show Input Value</button>
        `
})
export class Example{
    onClick(value){
        console.log(value);
    }
}
