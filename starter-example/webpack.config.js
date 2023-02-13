const path = require("path");
const srcDir = path.resolve(__dirname, "assets/src/");
const distDir = path.resolve(__dirname, "assets/dist/");

module.exports = {
  entry: [`${srcDir}/js/script.js`, `${srcDir}/stylus/global.styl`],
  output: {
    filename: "[name].bundle.js",
    path: distDir,
    clean: true,
  },

  resolve: {
    extensions: [
      ".js",
      ".styl",
      ".ts",
      ".json",
      ".jpg",
      ".jpeg",
      ".svg",
      ".png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        generator: {
          filename: "[name].css",
        },
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer")(/*{ grid: 'autoplace' }*/),
                  require("postcss-flexbugs-fixes"),
                ],
              },
            },
          },
          {
            loader: "stylus-loader",
          },
        ],
      },
    ],
  },
  plugins: [new (require("webpack-remove-empty-scripts"))()],
};
