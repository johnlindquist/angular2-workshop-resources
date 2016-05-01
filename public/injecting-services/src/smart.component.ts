import {Component} from 'angular2/core';
import {MailService} from './services/mail.service';

@Component({
    selector: 'smart',
    template: `
        You received a message: <h3>{{mailService.message}}</h3>
    `
})
export class Smart{
    constructor(public mailService:MailService){

    }

}
