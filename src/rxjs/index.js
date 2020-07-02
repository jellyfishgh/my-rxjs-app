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

const interval = delay =>
  new Observable(observer => {
    let start = 0
    setInterval(() => {
      observer.next(start++)
    }, delay)
  })

const timer = delay =>
  new Observable(observer => {
    let start = 0
    setTimeout(() => {
      observer.next(start)
      observer.complete()
    }, delay)
  })

const from = params => {
  if (Array.isArray(params)) {
    return new Observable(observer => {
      params.forEach(item => observer.next(item))
      observer.complete()
    })
  }
  return new Observable(observer => {
    Promise.resolve(params)
      .then(data => {
        observer.next(data)
        observer.complete()
      })
      .catch(err => {
        observer.error(err)
      })
  })
}

module.exports = {
  Observable,
  of,
  fromEvent,
  range,
  interval,
  timer,
  from
}
