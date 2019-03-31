# Standard Boilerplate
## Great for an easy HTML / SCSS / JS Sandbox environment.
This boilerplate is for a standerd html/css/js build without any frameworks. Webpack to minify and bundle all files. The dev environment is run in the webpack dev server, all files are moved ( even images ) to a production folder upon building and are hosted in ram during the dev server.

- JS / CSS / HTML, minification
- Image name hashing
- SCSS
- Auto prefixer
- Live Server
- Babel so you can write Javascript Next
- Babel polyfill ( env ) only uses polyfills that you require based on the supported browsers in package.json for smaller files

## Plans?

- [ ] Automatic image optimizations with Webpack. ( for now the example is just using remote images from unsplash )

# Commands

## Install dependencies
Install the needed node modules
`npm install`

## Run development live server
Put all of your files in the src folder based on the examples structure
`npm start`

## Build development files
This is so you can look at the files in the ./dist folder to explore your code without minification
`npm dev`

## Build development files
Build a minified production version of your app that will be in the ./dist folder
`npm run build`


## Other boilerplates  
### Boilerplate for react full stack development with Nextjs:
https://github.com/slaterbbx/fullstackinator
