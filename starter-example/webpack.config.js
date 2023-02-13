const path = require("path");
const srcDir = path.resolve(__dirname, "assets/src/");
const distDir = path.resolve(__dirname, "assets/dist/");

module.exports = {
  default: {
    entry: {
      script: srcDir + "/js/script.js",
      styles: srcDir + "/stylus/global.styl",
    },
    output: {
      filename: "[name].bundle.js",
      path: distDir,
      clean: true,
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
          type: "asset/resource",
          generator: {
            filename: "[name].css",
          },
          use: [
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    require("autoprefixer")(/*{ grid: 'autoplace' }*/),
                    require("postcss-pxtorem")({
                      rootValue: 16,
                      unitPrecision: 5,
                      propList: ["*"],
                      selectorBlackList: [],
                      replace: true,
                      mediaQuery: false,
                      minPixelValue: 0,
                    }),
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
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [new (require("webpack-remove-empty-scripts"))()],
  },
};
