const { JSDOM } = require('jsdom')

const tag = 'div'
const eventName = 'click'

module.exports = (createObservable, observer) => {
  const element = new JSDOM(`<${tag}></${tag}>`).window.document.querySelector(tag)
  const source = createObservable(element, eventName)
  source.subscribe(observer)
  setTimeout(() => {
    element[eventName]()
  }, 1000)
}
