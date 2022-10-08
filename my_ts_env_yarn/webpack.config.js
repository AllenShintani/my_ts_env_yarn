// pathモジュールを読み(output.pathに絶対パスを指定するため)
const path = require("path");

module.exports = {
  // モードの設定。指定可能な値は、none, development ,production（デフォルト）
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: "development",
  // アプリケーションが実行を開始されるポイント(エントリーポイント)
  // 配列で指定すると、すべての項目が実行される
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    // ビルド後のファイルが出力される"絶対パス"ディレクトリ
    // https://webpack.js.org/configuration/output/#outputpath
    path: path.join(__dirname, "public/js"),
  },
  // https://webpack.js.org/configuration/module/#rule-conditions
  module: {
    rules: [
      {
        // 一致"しなければならない"条件。(= input時に"test"される値)
        // 正規表現、正規表現の配列が指定可能(強制ではない)
        // https://webpack.js.org/configuration/module/#condition
        test: /\.js$/,
        // "一致してはいけない"条件。文字列または文字列の配列を指定可能(強制ではない)
        exclude: /node_modules/,
        use: [
          {
            // ローダーの指定
            // https://webpack.js.org/configuration/module/#ruleuse
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]],
            },
          },
        ],
      },
    ],
  },
};
