const Koa = require('koa')
const chalk = require('chalk')

const app = new Koa()
const logger = require('koa-logger')
const port = 3000;

app.use(logger())
app.use(ctx => ctx.body = '<h1>Hello reminder!</h1>');

app.listen(port)

console.log(`${chalk.magenta('\nserver is listening on port')} ${chalk.blue(port)}`)
