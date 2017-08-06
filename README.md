# This Project is a Blog system

## main tec stack:
* React
* Redux
* React-Router
* Node.js
* Express
* MongoDB
* axios
* lodash

## To start `server`Side
open the blog folder and run `cd server npm start`

Then the server side is running on `localhost://8080`

## To start `client`Side
On the blog folder, run `npm start`

Then the client side is running on `localhost://3000`

## Client to Server
I set `proxy` on client side:
```json
"proxy": {
  "/api": {
    "target": "http://localhost:8080",
    "ws": true
  }
},
```
Then Client data can be connected to server through `/api` router.
