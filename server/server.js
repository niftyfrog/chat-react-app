const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

// Reactアプリケーションのビルド出力ディレクトリを提供する
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// その他のAPIエンドポイントなどを追加する

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
