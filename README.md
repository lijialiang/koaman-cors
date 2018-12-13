# koa-middleware-cors

## Install

```sh
npm i koa-middleware-cors

# or

yarn add koa-middleware-cors
```

## How to use

```js
const Koa = require('koa')
const cors = require('koa-middleware-cors')

const app = new Koa()

app.use(cors())

app.use(async ctx => {
  ctx.body = 'Hello World!'
})

app.listen(3000)
```

## LICENSE

[MIT](./LICENSE)
