const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/ts/index.ts", "./src/stylus/global.styl"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".styl"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
};
