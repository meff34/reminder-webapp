const chalk = require('chalk')
const koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')

const server = new koa()
const port = 3000;

server
  .use(logger())
  .use(serve('public'))
  .use(ctx => ctx.body = '<h1>Hello reminder!</h1>')
  .listen(port)


console.log(`${chalk.magenta('\nserver is listening on port')} ${chalk.blue(port)}`)
