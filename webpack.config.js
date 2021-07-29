const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./client/index.tsx"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.webpack.json",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.FIREBASE_API_KEY": `"${process.env.FIREBASE_API_KEY}"`,
      "process.env.FIREBASE_AUTH_DOMAIN": `"${process.env.FIREBASE_AUTH_DOMAIN}"`,
      "process.env.FIREBASE_PROJECT_ID": `"${process.env.FIREBASE_PROJECT_ID}"`,
      "process.env.FIREBASE_STORAGE_BUCKET": `"${process.env.FIREBASE_STORAGE_BUCKET}"`,
      "process.env.FIREBASE_MESSAGING_SENDERID": `"${process.env.FIREBASE_MESSAGING_SENDERID}"`,
      "process.env.FIREBASE_APP_ID": `"${process.env.FIREBASE_APP_ID}"`,
      "process.env.LOTR_KEY": `"${process.env.LOTR_KEY}"`,
    }),
  ],
};
