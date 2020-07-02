const Observable = require('./Observable')

const of = (...args) => {
  const observable = new Observable(observer => {
    args.forEach(v => {
      observer.next(v)
    })
    observer.complete()
  })
  return observable
}

const fromEvent = () => {}

module.exports = {
  Observable,
  of,
  fromEvent
}
