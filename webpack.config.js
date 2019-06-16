const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	// entry file - starting point for the app
	entry: './src',

	// where to dump the output of a production build
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
  target: 'node',
	module: {
		rules: [
			{
				test: /\.js?/i,
				loader: 'babel-loader',
				options: {
					presets: [
										["@babel/preset-env",
										{
												"targets": {
													"node": "10"
												}
											}
										],
									],
					plugins: [
            ["@babel/plugin-transform-react-jsx", { pragma: 'h' }]
					]
				}
			},{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
		]
	},
	plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
		}),
    new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
	],
	
	// enable Source Maps
	devtool: 'source-map',

	devServer: {
		// serve up any static files from src/
		contentBase: path.join(__dirname, 'src'),

		// enable gzip compression:
		compress: true,

		// enable pushState() routing, as used by preact-router et al:
		historyApiFallback: true
	}
};