/* === dont forget to import scss to main.js file === */
/* ===> import './main.scss'; <=== */

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
	// if we need multiple entry points they are passed in via an array
	entry: './src/js/index.js',
	output: {
		// uses nodejs path built in function to handle the absolute path to the root folder
		path: path.resolve(__dirname, 'dist'),
		// name of the final output file
		filename: 'scripts/min.js'
	},
	optimization: {
		minimizer: [
			// minifyjs
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false, // set to true if you want JS source maps
				extractComments: true
			}),
			// minifycss
			new OptimizeCssAssetsPlugin({})
		],
		// this is used to export the css from the js file import into a seperate css file
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		},
	},
	devServer: {
		contentBase: './src',
		watchContentBase: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "scripts/min.css",
		})
	],
	module: {
		rules:[
			{   
				test: /\.js$/,
				exclude: /node_modules/, 
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							["@babel/preset-env", {
								useBuiltIns: 'usage',
								corejs: "3.14.0"
							}], // uses preset-env and calls on babel polyfils based on usage
						],
					babelrc: false
					}
				}]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader, // extracts css from js and makes a sep cssfile
						options: {
							publicPath: '../',
						}
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: 'postcss-loader', // used to autoprefix
						options: {plugins:[require('autoprefixer')()]}
					},
					{
						loader: 'resolve-url-loader', // used to resolve image urls in css
					},
					{
						loader: "sass-loader", // compiles Sass to CSS
						options: {
							// source maps must be on so that we can resolve the image urls in css
							sourceMap: true,
							sourceMapContents: false
						}
					}
				],
			},
			{
				test: /\.html$/,
				use: [
					{ loader: "file-loader",
					options: {
						name: "[name].[ext]"
					}
					},
					{ loader: "extract-loader" },
					{ loader: "html-loader",
					options: {
						attrs: ["img:src", "use:href"],
						minimize: true,
					}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{ loader: "file-loader",
						options: {
							name: "img/[name].[ext]"
						}
					}
				]
			},
		]
	},
}

// One big note:
// outputPath is place where your want to save files
// publicPath is what url you have in js, css and etc files.