# 🛰️ Static HTML / SCSS / JS Webpack build environment.
This boilerplate is for static HTML / CSS / JS builds without any frameworks. Webpack + UglifyJs to minify and bundle all files. The dev environment is run in the webpack dev server, all files are moved ( even images ) to a production folder upon building and are hosted in ram while running the webpack dev server.  

## 🤔 Why use this?
This boilerplate allows you to incorporate a modern workflow with static website development. This can be usefull for simple projects, examples, and especially for those that are new / learning web development. I have included an example project that demonstrates best practices for such an occasion. If you are new to web development, this boilerplate can be extremely useful to you since it incorporates a modern workflow environment while allowing you to focus on learning the core fundamentals of website development.

### ✨ Features
- Best practices example project
- SCSS / SASS / CSS
- Auto prefixer ( adds prefixes automatically to your CSS )
- Minification for HTML / JS / CSS
- Extracts CSS to an external file upon build ( Keeping it OldSchool )
- Live development server
- Build dev or production ( dev build excludes minification for css and js )
- Images will be automatically resolved and moved to ./dist folder when built.
- Babel so you can write Javascript ES.Next
- Babel polyfill ( env ) only uses polyfills that you require based on the supported browsers in package.json for smaller and more optimized production builds.
- Minimal source files ( only one Webpack config to handle everything )

### 🛠 Plans?

- [ ] Automatic image optimizations with Webpack. ( I have found that automated responsive images is a bit tricky with this setup, mainly because all plugins for webpack for responsive images seem to revolve around use with react, Image optimization ie. file compression, is a simple option but still does not automated responsive images. If anyone has a solution to this, please feel free to create a pull request. )
- [ ] Automated file name hashing for cache ( This is simple and is on my to-do. )

## 🖥️ Commands

### 📩 Install dependencies
Install the needed node modules<br>
#### `npm install`
--------------------------------------

### 🔨 Run development live server
Put all of your files in the src folder based on the examples structure<br>
#### `npm start`
--------------------------------------

### 🤖 Build development files
This is so you can look at the files in the ./dist folder to explore your code without minification<br>
#### `npm run dev`
--------------------------------------

### 📦 Build production files
Build a minified production version of your app that will be in the ./dist folder<br>
#### `npm run prod`
--------------------------------------

## Example Project Included
The example project shows how simple and quickly you can get working with this boiler plate to produce high quality html, css, js projects. To get working in the example project run `npm install` then `npm start` and the webpack dev server will launch in your default browser.

## 🔍 About the example files
View the example design on CodePen: https://codepen.io/litonfiredesign/full/BbXZPa<br>

The design is fully responsive, It should yield great results down to widths of 325px and respond properly upwards to 4k. The example page is designed with user accesablility in mind. The example page will resize when you zoom in or out so that you can still view the page contents clearly zoomed in at 500x zoom. Changing your default browser font size will also create the appearance of a zoomed page by increasing all page sizing with the font size increase ( or visa versa ). Proper animations for tabbing have also been applied. This example is a good one for beginners to help illustrate some "best practices" such as using the BEM ( "Block Element Modifier" ) method, User accesability, File seperation and imports with SCSS. This could also help a new developer learn webpack, babel, ES.Next and NPM.

![Webpack html, css, js Boilerplate](example.jpg)

## Other boilerplates  
### Boilerplate for react full stack development with Nextjs:
https://github.com/slaterbbx/fullstackinator


## License
MIT License | Fullstackinator © 2019 Kyle Gallagher
