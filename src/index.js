// https://zhuanlan.zhihu.com/p/146795979
// https://rxjs.dev/guide/subscription

const { _import } = require('./util')

let isUseRxjs = true
isUseRxjs = false

const startApp = appName => {
  const app = require(`./app/${appName}`)
  const observerList = [
    {
      next: v => console.log('next', v),
      error: v => console.log('error', v),
      complete: v => console.log('complete', v, '\n')
    },
    (...args) => console.log(...args)
  ]
  console.log('\n---', appName, '---\n')
  observerList.forEach(observer => app(_import('rxjs', isUseRxjs)[appName], observer, isUseRxjs))
}

startApp('of')
// startApp('fromEvent')
// startApp('range')
// startApp('interval')
// startApp('timer')
// startApp('from')
