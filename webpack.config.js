module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true,
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',

						options: {
							plugins: function() {
								return [precss, autoprefixer];
							}
						}
					}
				]
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				loader: "ts-loader"
			}
		]
	},

	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json'],
		alias: {
		  '@': resolve('src'),
		}
	},

	entry: {
		app: './src/app.ts'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development'
};
