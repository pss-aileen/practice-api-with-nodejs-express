# Web API with Node.js and Express

- 概要: Node.js と Express を使って、CRUD 操作を行うための基本的な Web API を作成。
- 開発環境
  - node: v22.2.0
  - npm: 10.7.0

## 手順

1. [package.json の作成](#packagejson-の作成)
1. [依存関係のインストール](#依存関係のインストール)
1. nodemon の動作確認
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

以下のコマンドを実行して、プロジェクトに Express、nodemon をインストールする。

```sh
npm install express
npm install nodemon --save-dev
```
#### Express とは [^4]

Node.js を簡単に書くためのフレームワーク。

数多くのHTTPユーティリティメソッドとミドルウェアを利用できるため、堅牢なAPIを迅速かつ簡単に作成できる。

#### nodemon とは [^5]

ファイルの変更が検知された時、自動的に node アプリケーションを再スタートするツール。

具体的な動きとしては、`index.js` を保存したら、`node index.js` を再度実行してくれる。
このツールは、`npm run dev` といったコマンドを何度も入力する手間をなくしてくれる。

#### `npm install` とは [^6] [^7] [^8]

- `npm install <package-spec>` とは
  - アプリケーションに必ず必要なパッケージを `dependencies` としてインストールするコマンド
  - Expressは サーバー作成に必要なので、はこちらでインストール
- `npm insatall <package-spec> --save-dev` とは
  - 開発の間にだけ必要なパッケージを `devDependencies` としてインストールするコマンド
  - テストフレームワークやビルドツールなど
  - nodemon は開発の時だけ必要なので、こちらでインストール
  

### nodemon の動作確認




[^1]: Creating a package.json file - npm https://docs.npmjs.com/creating-a-package-json-file
[^2]: Running a CLI questionnaire - npm https://docs.npmjs.com/creating-a-package-json-file#running-a-cli-questionnaire
[^3]: Creating a default package.json file - npm https://docs.npmjs.com/creating-a-package-json-file#creating-a-default-packagejson-file
[^4]: Express - Node.js web application framework https://expressjs.com/
[^5]: nodemon npm https://www.npmjs.com/package/nodemon
[^6]: npm-install - npm Docs https://docs.npmjs.com/cli/v10/commands/npm-install
[^7]: Specifying dependencies and devDependencies in a package.json file - npm Docs https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
[^8]: Difference between dependency and devdependency - Pravin M https://frontendinterviewquestions.medium.com/difference-between-dependency-and-devdependency-2e8812b3f838