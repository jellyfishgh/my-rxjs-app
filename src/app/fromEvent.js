const { _import } = require('../util')

const { fromEvent } = _import('rxjs')

const { JSDOM } = require('jsdom')

const tag = 'div'
const eventName = 'click'

module.exports = {
  name: 'fromEvent',
  run: observer => {
    const element = new JSDOM(`<${tag}></${tag}>`).window.document.querySelector(tag)
    const source = fromEvent(element, eventName)
    source.subscribe(observer)
    setTimeout(() => {
      element[eventName]()
    }, 1000)
  }
}
