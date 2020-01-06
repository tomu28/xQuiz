# xQuiz
筋トレクイズ&amp;チャットアプリ

## 動作環境

- React v16.8
- yarn v1.17.3
- Node 8+
- Chrome 79.0.3945.88

## 事前準備

1. Sign up for Chatkit
- [PUSHER](https://pusher.com/)のChatkitにサインインします
- ログインしたら、Chatkitインスタンスを作成し、**Credentials**タブで**Instance Locator**と**Secret Key**をメモします  
[参考画像](https://images.ctfassets.net/1es3ne0caaid/1ClR2zuvfzt2CBSu9Y0gNn/b9d89f7bdccf46def3007c8904641af7/react-direct-messages-chatkit-1.png)
- 次に、**Console**タブをクリックして、インスタンスの新しいユーザーとルームを作成します。ルームを作成したら、後で使用するため、ルームIDをメモします。  
[参考画像](https://images.ctfassets.net/1es3ne0caaid/3mPnYREKChFViXTQUFW3Cw/030446fd8e1deca3c5e495e62b442b15/react-direct-messages-chatkit-2.png)
2. ルートディレクトリ(`/`)で、.envファイルを作成し、以下のフォーマットで記述します

```
// .env

PORT=5200
CHATKIT_INSTANCE_LOCATOR=<your chatkit instance locator>
CHATKIT_SECRET_KEY=<your chatkit secret key>
```

## サーバー起動方法

ルートディレクトリ(`/`)で以下のコマンドを実行する。ポート5200で起動します。

```sh
$ node server.js
```
