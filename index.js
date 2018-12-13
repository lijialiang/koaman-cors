const koaCors = require('koa2-cors')

module.exports = (whiteList, options) => koaCors({
  origin (ctx) {
    if (!whiteList) {
      return ctx.headers.origin
    }

    let access = false

    whiteList.forEach(v => {
      if (ctx.headers.origin) {
        new RegExp(v).test(ctx.headers.origin) && (access = ctx.headers.origin)
      } else if (ctx.headers.referer) {
        new RegExp(v).test(ctx.headers.referer) && (access = ctx.headers.referer)
      }
    })

    return access
  },
  maxAge: options.maxAge || 5,
  credentials: options.credentials || true,
  allowHeaders: options.allowHeaders || void 0,
  allowMethods: options.allowMethods || void 0,
  exposeHeaders: options.exposeHeaders || void 0
})
