# node.jsで最小限のapi

- 参考：
    - 「小学生でもわかるWebAPI入門。ゼロからWebAPIを作ってみよう」https://youtu.be/6_zIN-bByB4
    - 「ゼロからはじめるExpress + Node.jsを使ったアプリ開発」https://qiita.com/nkjm/items/723990c518acfee6e473

```
 # initial commands
 cd nodejs_practice
 npm init
 npm install express --save
 touch app.js
 
 # start server
 node app.js
 
 # GET
 curl -X GET http://localhost:3000/booklog
 # POST
 curl -X POST -H "Content-Type: application/json" -d '{"name":"zerotuku", "text":"omoro"}' http://localhost:3000/booklog 
 ```
