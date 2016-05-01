import {Component} from 'angular2/core';
import {Smart} from './smart.component';

@Component({
    selector: 'app',
    directives:[Smart],
    template: `
        <smart></smart>
    `
})
export class App{
}