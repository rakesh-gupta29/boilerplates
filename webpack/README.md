# 📦 webpack Boilerplate

[![License: MIT](https://camo.githubusercontent.com/5fab2edf3816ef9fb3ebcaf6e613fa7b40ff7652ec69e5f6e7f695aa24bf5ce6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d626c75652e737667)](https://opensource.org/licenses/MIT)

Webpack 5 boilerplate using Babel, PostCSS and SASS and many more.

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#installation)Installation

`npm i`

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#usage)Usage

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#development-server)Development server

`npm run dev`

You can view the development server at `localhost:1000`.

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#production-build)Production build

`npm run build`

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#metadata)Define Package Metadata

-  Amend `package.json` file and optionally specify:
   -  `name` - Name of your project. A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`.
   -  `version` - Specify and maintain a version number indicator for your project code.
   -  `author` - Your organisation or just yourself. You can also specify [`contributors`](https://docs.npmjs.com/files/package.json#people-fields-author-contributors).
   -  `description` - Short description of your project.
   -  `keywords` - Put keywords in it. It’s an array of strings.
   -  `repository` - Specify the place where your code lives.
   -  `license` - Announce your code license, figure out the license from [Choose an Open Source License](https://choosealicense.com/) .
   -  `browserslist` - Specify the supported browsers versions - you can refer to [full list](https://github.com/browserslist/browserslist#full-list) of availalbe options.

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#additional-webpack-configuration)Additional `webpack` configuration

You can additionally configure `webpack` for specific environment:

-  `development` - [`config/webpack.dev.js`](https://github.com/rakesh-gupta29/webpack-boilerplate/blob/main/config/webpack.dev.js)
-  `production` - [`configuration/webpack.prod.js`](https://github.com/rakesh-gupta29/webpack-boilerplate/blob/main/config/webpack.prod.js)
   -  Note that if you prefer to build and deploy [`sourcemap`](https://webpack.js.org/configuration/devtool/#production) files:

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#development)Development

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#assets-source)Assets Source

-  **SASS/PostCSS** files are located under `src/styles/vendor`
-  **JavaScript** files with support of latest ECMAScript _ES6 / ECMAScript 2016(ES7)/ etc_ files are located under `src/scripts/`
-  **Image** files are located under `src/assets/images`
-  **Font** files are located under `src/assets/fonts`
-  **HTML** file is located under `src/template.html`
-  **JSON** JSON files are loated under `src/data/json`

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#dependencies)Dependencies

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#webpack)webpack

-  [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
-  [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
-  [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
-  [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#babel)Babel

-  [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
-  [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
-  [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#loaders)Loaders

-  [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
-  [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
   -  [`sass`](https://www.npmjs.com/package/sass) - Node Sass
   -  Resolve Imports in SASS using appropriate loaders
-  [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
   -  [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
-  [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
-  [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#plugins)Plugins

-  [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
-  [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
-  [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
-  [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
-  [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
-  [`css-autoprefixer`](https://github.com/postcss/autoprefixer) - Autoprefixing CSS code with vendor prefixes
-  [`terser`](https://github.com/terser/terser) - Minify JS code for production mode.
-  [`favicon-plugin`](https://www.npmjs.com/package/favicons-webpack-plugin) - Generate Favicon icons and code injection in HTML
-  [`json-minfier`](https://webpack.js.org/plugins/json-minimizer-webpack-plugin/) - Sanitize and minify all json files.

### [](https://github.com/rakesh-gupta29/webpack-boilerplate#linters)Linters

-  [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
-  [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
   -  -  [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
-  [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/main/resolvers/webpack) - Throw exceptions for import/export in webpack

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#author)Author

-  [Rakesh Gupta](https://github.com/rakesh-gupta29)

## [](https://github.com/rakesh-gupta29/webpack-boilerplate#license)License

This project is open source and available under the [MIT License](https://github.com/rakesh-gupta29/webpack-boilerplate/blob/main/LICENSE).
