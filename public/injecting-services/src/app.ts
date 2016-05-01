import {Component} from 'angular2/core';
import {Smart} from './smart.component';
import {MailService} from './services/mail.service';

@Component({
    selector: 'app',
    providers: [MailService],
    directives:[Smart],
    template: `
        <smart></smart>
    `
})
export class App{
}