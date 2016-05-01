import {Component} from 'angular2/core';
import {Home} from './home/home.component';

@Component({
    selector: 'app',
    directives:[Home],
    template: `
        <home></home>
    `
})
export class App{
}