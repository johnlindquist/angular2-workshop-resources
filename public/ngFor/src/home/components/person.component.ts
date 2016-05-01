import {Component, Input} from 'angular2/core';
@Component({
    selector: 'person',
    template: `
        <style>
        .person{
            font-family: Helvetica,serif;
            border-top: 2px dashed cornflowerblue;
            background-color: lightyellow;
        }
        </style>
        
        <div class="person">
            {{name}}
        </div>
    `
})
export class Person{
    @Input() name;
}