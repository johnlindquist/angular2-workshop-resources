import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
@Component({
    selector: 'home',
    template: `
        {{timer | async}}
    `
})
export class Home{
    timer = Observable.interval(1000)
}