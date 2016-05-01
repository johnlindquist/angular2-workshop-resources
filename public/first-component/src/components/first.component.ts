import {Component} from 'angular2/core';

@Component({
    selector: 'first',
    template: `
            I have a message for you: {{message}}
        `
})
export class First{
    message = "Hi!";
}
