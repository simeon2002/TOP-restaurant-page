import HtmlWebpackPlugin from "html-webpack-plugin";
import { watchFile } from "node:fs";
import path from "node:path";
// import html from "./src/template.html";

export default {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "src/template.html" })],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
