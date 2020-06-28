const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  // mode: "production",
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "0.0.0.0",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(less|css)$/,
        use: [
          { loader: "style-loader", options: { injectType: "styleTag" } }, // Inject CSS into the DOM
          "css-loader", // The css-loader interprets @import and url() like import/require() and will resolve them.
          "less-loader", // Compiles Less to CSS
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    // new MiniCssExtractPlugin(),
  ],
};
