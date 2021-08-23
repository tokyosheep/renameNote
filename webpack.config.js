"use strict";
const mode = "production";
const TerserPlugin = require("terser-webpack-plugin");
const enabledSourceMap = mode === "development";
const path = require("path");

module.exports = [{
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: mode,
    devtool:"source-map",
    externals: {
      fsevents:"require('fsevents')"
    },
    optimization:{
      minimize: !enabledSourceMap,
      minimizer:[
          new TerserPlugin({
              extractComments: "all",
              terserOptions:{
                  compress:{
                      drop_console:true,//production modeでconsole.log消えます
                  }
              }
          }),
      ],
    },
    target: "electron-renderer",
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/js/main.tsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/transpiled`,
      // 出力ファイル名
      filename: "main.min.js"
    },
    context:path.join(__dirname,"src/js"),
    entry:{main:"./main"},
    module: {
      rules:[
        {
          test:/\.tsx?$/,
          use:"babel-loader",
          exclude:/node_modules/
        }
      ],
      /*
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        }
      ],
      */
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  },{
    mode: mode,
    devtool:"source-map",
    /*
    optimization:{
      minimize: !enabledSourceMap,
      minimizer:[
          new TerserPlugin({
              extractComments: "all",
              terserOptions:{
                  compress:{
                      drop_console:true,//production modeでconsole.log消えます
                  }
              }
          }),
      ],
    },
    */
    target: "electron-main",
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./mainProcess/index.ts",
    output: {
      //  出力ファイルのディレクトリ名
      path: __dirname,
      // 出力ファイル名
      filename: "index.js"
    },
    context:__dirname,
    entry:{main:"./mainProcess"},
    module:{
      rules:[
        {
          test:/\.tsx?$/,
          use:"babel-loader",
          exclude:/node_modules/
        }
      ],
      /*
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        }
      ],
      */
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    }
  }];