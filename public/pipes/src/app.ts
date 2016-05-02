import {Component} from 'angular2/core';

import {StarWarsService} from './services/starwars.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Home} from './home/home.component';

@Component({
    selector: 'app',
    providers: [StarWarsService, HTTP_PROVIDERS],
    directives:[Home],
    template: `
        <home></home>
    `
})
export class App{
}