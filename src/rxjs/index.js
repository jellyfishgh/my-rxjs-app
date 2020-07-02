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
    const handler = e => {
      observer.next(e)
    }
    element.addEventListener(eventName, handler)
    return {
      unsubscribe: () => element.removeEventListener(eventName, handler)
    }
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
    const inter = setInterval(() => {
      observer.next(start++)
    }, delay)
    return {
      unsubscribe: () => clearInterval(inter)
    }
  })

const timer = delay =>
  new Observable(observer => {
    let start = 0
    const timer = setTimeout(() => {
      observer.next(start)
      observer.complete()
    }, delay)
    return {
      unsubscribe: () => clearTimeout(timer)
    }
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
