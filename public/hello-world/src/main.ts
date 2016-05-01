import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';

bootstrap(App)
    .then(()=> console.log('App running...'))
    .catch(err => console.log(err));



