const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.(png)/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
