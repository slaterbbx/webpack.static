# Standard Boilerplate
## Great for an easy HTML / SCSS / JS Sandbox environment.
This boilerplate is for a standerd html/css/js build without any frameworks. Webpack to minify and bundle all files. The dev environment is run in the webpack dev server, all files are moved ( even images ) to a production folder upon building and are hosted in ram during the dev server.

- Best practices example project
- JS / CSS / HTML, minification
- Image name hashing
- SCSS
- Auto prefixer
- Live Server
- Babel so you can write Javascript ES.Next
- Babel polyfill ( env ) only uses polyfills that you require based on the supported browsers in package.json for smaller files

## About the example files?
View the example design on CodePen: https://codepen.io/litonfiredesign/full/BbXZPa<br>

The design is fully responsive, It should yield great results down to widths of 325px and respond properly upwards to 4k. The page will resize with zoom so that you can still view the page at 500x zoom. Changing your default browser font size will also create the appearance of a zoomed page by increasing all page sizing with the font size increase and visa versa. 

## Plans?

- [ ] Automatic image optimizations with Webpack. ( for now the example is just using remote images from unsplash )

# Commands

## Install dependencies
Install the needed node modules<br>
### `npm install`

## Run development live server
Put all of your files in the src folder based on the examples structure<br>
### `npm start`

## Build development files
This is so you can look at the files in the ./dist folder to explore your code without minification<br>
### `npm dev`

## Build production files
Build a minified production version of your app that will be in the ./dist folder<br>
### `npm run build`


## Other boilerplates  
### Boilerplate for react full stack development with Nextjs:
https://github.com/slaterbbx/fullstackinator


## License
MIT License | Fullstackinator © 2019 Kyle Gallagher
