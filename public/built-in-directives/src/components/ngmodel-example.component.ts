import {Component} from 'angular2/core';
@Component({
    selector: 'ngmodel-example',
    template: `
<div>
    <input type="text" [(ngModel)]="name">
    {{name}}
</div>
`
})
export class NgModelExample {}