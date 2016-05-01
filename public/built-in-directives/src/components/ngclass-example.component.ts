import {Component} from 'angular2/core';
@Component({
    selector:'ngclass-example',
    template: `
    <style>
        .highlight{
            border: 3px solid yellow;
        }
        
        .selected{
            font-weight: bold;
        }
    </style>
    
    <div 
        (mouseover)="isOver = true" 
        (mouseout)="isOver = false" 
        (click)="isSelected = !isSelected"
        [ngClass]="{highlight: isOver, selected: isSelected}"
        >    
        Roll over me!
    </div>
`
})
export class NgClassExample{
    isOver = false;
    isSelected = false;
}