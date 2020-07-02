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

const range = (start, end) =>
  of(
    ...(() => {
      start = Number(start)
      end = Number(end)
      if (Number.isInteger(start)) {
        if (Number.isInteger(end)) {
          if (end > 0) {
            return Array.from({ length: end }, (_, i) => start + i)
          }
          return []
        }
        if (start > 0) {
          return Array.from({ length: start }, (_, i) => i)
        }
      }
      return []
    })()
  )

module.exports = {
  Observable,
  of,
  fromEvent,
  range
}
