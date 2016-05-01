import {Component} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import {ipcRenderer} from 'electron';

@Component({
    selector: 'app',
    template: `
       <div class="jumbotron">
            <h1 class="display-3">Angular 2 Workshop</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.</p>
            <hr class="m-y-2">
            <p>To get started, launch the book:</p>
            
            <label>Port Number: <input #port type="number" value="3333"></label>
            <p class="lead">
                <a (click)="onLaunchServer(port.value)" class="btn btn-primary btn-lg" href="#" role="button">Launch Server</a>
            </p>
            <p class="lead">
                <a (click)="onLaunchBook()" class="btn btn-primary btn-lg" href="#" role="button">Launch Book</a>
            </p>
        </div>
    `
})
export class App {
    constructor(){}
    onLaunchBook(){
        ipcRenderer.send('launchbook');
    }
    
    onLaunchServer(port){
        ipcRenderer.send('launchserver', {port});
    }
}