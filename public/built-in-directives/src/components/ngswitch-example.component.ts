import {Component} from 'angular2/core';
@Component({
    selector: 'ngswitch-example',
    template: `
<div>
    <input #i (change)="num = convertToNumber(i.value)" type="number" value="0">
    
    <div [ngSwitch]="num">
        <p *ngSwitchDefault>Change the number above, I dare you!</p>
        <p *ngSwitchWhen="1">One is the loneliest number</p>
        <p *ngSwitchWhen="2">Two is company</p>
        <p *ngSwitchWhen="3">Three is a crowd</p>
    </div>
</div>
`
})
export class NgSwitchExample {
    num = 0;
    convertToNumber = string => parseInt(string);
}