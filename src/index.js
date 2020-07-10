const { _import } = require('./util')

let isUseRxjs = true
isUseRxjs = false

const startApp = appName => {
  const app = require(`./app/${appName}`)
  const observer = (...args) => console.log(...args)
  console.log('\n---', appName, '---\n')
  app(_import('rxjs', isUseRxjs)[appName], observer, isUseRxjs)
}

startApp('of')
// startApp('fromEvent')
// startApp('range')
// startApp('interval')
// startApp('timer')
// startApp('from')
