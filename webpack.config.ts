module.exports = {
	entry: ["react-hot-loader/patch", "./src"],
	module: {
		rules: [
			{
				test: /\.module.css$/,
				use: [
					{
						loader: "css-loader",
						options: {
							modules: true, // Раз — и готово
						},
					},
				],
			},
		],
	},
};
