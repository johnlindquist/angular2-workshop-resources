SystemJS.config({
    transpiler: "typescript",
    allowSyntheticDefaultImports: true,
    typescriptOptions: {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    },
    map: {
        "rxjs": "node_modules/rxjs",
        "angular2": "node_modules/angular2",
        "moment": "node_modules/moment",
        "@ngrx": "node_modules/@ngrx",
        "typescript": "node_modules/typescript/lib/typescript.js",
        "electron": "node_modules/electron-prebuilt"
    },
    packages: {
        "rxjs": { "defaultExtension": "js" },
        "angular2": { "defaultExtension": "js" },
        "moment": { "main": "moment.js" },
        "electron": { "defaultExtension": "js" },

        "@ngrx/store":{
          "main":"dist/index.js"
        },

        "src": { "defaultExtension": "ts", "main":"main" },
        "build": { "defaultExtension": "ts" }
        
    }
});

