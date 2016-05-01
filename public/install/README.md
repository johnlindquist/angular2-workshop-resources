# Installing Angular 2

## TL;DR
Either use a starter repository:

`git clone https://github.com/johnlindquist/angular-2-hello-world.git`

**Or** install and configure your project by hand.

Both options are described below.

## Beginner Path: Use a Starter Repository
* Install Git: https://git-scm.com/downloads
* Install Node: https://nodejs.org

Open a terminal or command prompt, navigate to a directory, and run
the following command:

`git clone https://github.com/johnlindquist/angular-2-hello-world.git`

Once that has finished cloning, cd into the directory:

`cd angular-2-hello-world`

Then run the following command to install the required packages:

`npm install`

Finally, start the server:

`npm start`

You can now begin playing with the files in `src` :smile:


## Advanced Path: Start From Scratch
Open a terminal or command prompt.

Make a new directory where you want to create your project:

`mkdir my-angular-project`

Change the working directory:

`cd my-angular-project`

### Install dependencies

`npm install angular2 es6-shim reflect-metadata rxjs systemjs zone.js
 --save`
> The versions of each package will change depending on the date you 
> install. So `npm install angular2` will show you the required versions
> of all the other packages.

### Install TypeScript

`npm install typescript --save-dev`

Our setup will be using TypeScript in the background, but we need to
have it installed anyway.

### Configure TypeScript
You need to setup a quick configuration so your editor and compiler know
how to handle TypeScript.

Generate a config file: 

`node_modules/.bin/tsc --init`


> :memo: If you have installed TypeScript globally with `npm install 
typescript -g`, then you can run `tsc --init`, but we need TypeScript 
installed locally for SystemJS to work.

This will generate the following `tsconfig`:
[import](tsconfig.generated.json)

To properly support Angular 2, we need to add a few lines to the 
`compilerOptions`:

[import:7-9](tsconfig.json)

These lines allow us to use `node_modules` to lookup our imports and 
use a couple experimental features required by Angular 2 which we'll
explain more in-depth later.

The final `tsconfig.json` will look like this:

>`tsconfig.json`

[import](tsconfig.json)


### Configure SystemJS
Now you tell SystemJS how to use TypeScript and where to find your
libraries.


>`config.js`

[import](config.js)


### Create a `main.ts` File
Create a `src` directory.

Create a `main.ts` file.

In the `main.ts`, write the following code as a test.

> `src/main.ts`

[import](src/main.ts)

### Create an `index.html` to Load Your Files
1. Include `angular2-polyfill.js` to support Angular 2's custom libraries.

2. Include `system.js` to load our modules.

3. Create an `<app>Loading...</app>` tag to load our app into (the 
`Loading..` will automatically be replaced)

3. Include our `config.js` to configure SystemJS.

4. Tell SystemJS to import our `src/main.ts` file.

>`index.html`
[import](index.html)


### Install and Start a Local Server

Install `browser-sync` globally.

`npm install browser-sync -g`

Once finished installing, run:

`browser-sync start --server`

> :memo: For more information on Browsersync, check out 
> https://www.browsersync.io/

You're now ready to tackle the ["Hello World"](../hello-world/README.md)! :+1:

## What's That Syntax?

### String Templates
When you type two `'s, anything between them is considered a string:

``` js
`
    This
        is
a
                String!
`
```

This allows you to easily write HTML inside of a multiline string:
```js
var myTemplate = `
    <h1>This is a header</h1>
    <div>This is some content</div>
`;
```