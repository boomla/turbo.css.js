const process = require("process");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: process.cwd() + "/dist",
    filename: "bundle.js",
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
};
