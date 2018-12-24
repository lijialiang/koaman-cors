# koaman-cors

## Install

```sh
npm i koaman-cors

# or

yarn add koaman-cors
```

## How to use

```js
const Koa = require('koa')
const cors = require('koaman-cors')

const app = new Koa()

app.use(cors())

app.use(async ctx => {
  ctx.body = 'Hello World!'
})

app.listen(3000)
```

## LICENSE

[MIT](./LICENSE)
