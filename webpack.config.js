const process = require("process");

module.exports = [
	{
		entry: "./src/builds/turbocss.browser.lib.ts",
		output: {
			path: process.cwd() + "/dist",
			filename: "turbocss.browser.lib.min.js",
		},
		resolve: {
			extensions: [".ts"],
		},
		module: {
			rules: [
				// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
				{ test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
			],
		},
		mode: "production",
	},
	{
		entry: "./src/builds/turbocss.browser.global.watch.ts",
		output: {
			path: process.cwd() + "/dist",
			filename: "turbocss.browser.global.watch.min.js",
		},
		resolve: {
			extensions: [".ts"],
		},
		module: {
			rules: [
				// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
				{ test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
			],
		},
		mode: "production",
	},
];

