const Observable = require('./Observable')

const of = (...args) =>
  new Observable(observer => {
    args.forEach(v => {
      observer.next(v)
    })
    observer.complete()
  })

const fromEvent = (element, eventName) =>
  new Observable(observer => {
    element.addEventListener(eventName, e => {
      observer.next(e)
    })
  })

module.exports = {
  Observable,
  of,
  fromEvent
}
