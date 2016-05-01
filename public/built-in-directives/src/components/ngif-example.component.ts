import {Component} from 'angular2/core';
@Component({
    selector:'ngif-example',
    template: `
    <button (click)="isMessageShown = !isMessageShown">
        {{isMessageShown ? 'Hide Message' : 'Show Message'}}
    </button>
    <h1 *ngIf="isMessageShown">HI EVERYBODY!!!</h1>
`
})
export class NgIfExample{
    isMessageShown;
}