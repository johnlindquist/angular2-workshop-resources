import {Component} from 'angular2/core';
import {First} from './components/first.component';

@Component({
    selector: 'app',
    directives:[First],
    template: `
        <first></first>
    `
})
export class App{
}