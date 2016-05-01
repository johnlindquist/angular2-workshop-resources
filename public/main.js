var app = require('electron').app;
var ipc = require('electron').ipcMain;
var express = require('express');
var BrowserWindow = require('browser-window');
var path = require('path');
var swapi = require('./swapi/index');

console.log('is this on?');

// browser-window creates a native window
var mainWindow = null;

ipc.on('launchserver', function(event, options){
    console.log('Starting swapi on ' + options.port);
    swapi.server.listen(options.port);
});


ipc.on('launchbook', function(){
    var anotherWindow = new BrowserWindow({ width: 800, height: 600 });
    var bookPath = 'file://' + __dirname + './_book/';
    var bookMain = bookPath + 'index.html';

    // console.log(bookPath);


    anotherWindow.loadURL(bookMain);

    anotherWindow.webContents.on('will-navigate', function(event, url){
        event.preventDefault();

        if(url.endsWith('/')) url = url + 'index.html'
        anotherWindow.loadURL(url);
    });

    anotherWindow.show();
});

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

function ready() {

    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({ width: 1200, height: 900 });
    mainWindow.webContents.openDevTools();


    // Tell Electron where to load the entry point from
    mainWindow.loadURL('file://' + __dirname + '/index.html');


    // Clear out the main window when the app is closed
    mainWindow.on('closed', function() {

        mainWindow = null;
    });


}


app.on('ready', ready);





