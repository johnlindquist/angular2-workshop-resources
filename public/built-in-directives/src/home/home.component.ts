import {Component} from 'angular2/core';
import {NgClassExample} from '../components/ngclass-example.component';
import {NgIfExample} from '../components/ngif-example.component';
import {NgSwitchExample} from '../components/ngswitch-example.component';
import {NgModelExample} from '../components/ngmodel-example.component';

@Component({
    selector: 'home',
    directives: [NgClassExample, NgIfExample, NgSwitchExample, NgModelExample],
    template: `
        <ngclass-example></ngclass-example>
        <ngif-example></ngif-example>
        <ngswitch-example></ngswitch-example>
        <ngmodel-example></ngmodel-example>
    `
})
export class Home{
    constructor(){}
}
