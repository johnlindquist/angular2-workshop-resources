import {Component} from 'angular2/core';
import {Example} from './components/example.component';

@Component({
    selector: 'app',
    directives:[Example],
    template: `
        <example></example>
    `
})
export class App{
}