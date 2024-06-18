# Web API with Node.js and Express

- 概要: Node.js と Express を使って、CRUD 操作を行うための基本的な Web API を作成。
- 開発環境
  - node: v22.2.0
  - npm: 10.7.0

## 手順

1. [package.json の作成](#packagejson-の作成)
1. `npm install express`
1. `npm install nodemon --save-dev`
1. サーバーを起動する
1. HTTP GET REQUEST
1. HTTP POST REQUEST
1. HTTP PUT REQUEST
1. HTTP DELETE REQUEST

### `package.json` の作成

`package.json` を作成したいプロジェクトフォルダの中で、以下のコマンドを実行する。

```sh
npm init -y
```

#### `package.json` とは [^1]

- プロジェクトが利用するモジュールやライブラリのリストを記載するファイル
- 言い換えると、プロジェクトが依存するパッケージのリストのこと
- 記載はモジュールやライブラリのインストール時に自動で書き込まれる
- モジュールやライブラリのバージョンが指定される
- なぜ必要なのか？
  - `package.json` をもとに必要な依存関係をインストールして開発するため


#### `npm init -y` とは 

デフォルトの `package.json` を作成するコマンド。

- `npm init` とは [^2]
  - `package.json` を CLI で情報を入力して作成するためのコマンド
  - 具体的には、`npm init` をたたいた後、packgename、description、entrypoint などをコマンドラインで入力することができる
- `npm init -yes` or `npm init -y` とは [^3]
  - デフォルトの `package.json` を作成するためのコマンド
  - `npm init` とは違い、CLI で情報を入力しない
- CLI（Command Line Interface）とは
  - テキストベースのコマンドを利用して、コンピューターと対話するための手段


### 依存関係のインストール

- express
- nodemon 開発用

[^1]: [Creating a package.json file | npm Docs](https://docs.npmjs.com/creating-a-package-json-file)
[^2]: [Creating a package.json file | npm Docs](https://docs.npmjs.com/creating-a-package-json-file#running-a-cli-questionnaire)
[^3]: [Creating a package.json file | npm Docs](https://docs.npmjs.com/creating-a-package-json-file#running-a-cli-questionnaire)