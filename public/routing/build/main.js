"use strict";
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var app_1 = require('../src/app');
core_1.enableProdMode();
browser_1.bootstrap(app_1.App)
    .catch(console.log.bind(console));
