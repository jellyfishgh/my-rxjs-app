const Observable = require('./Observable')

const map = fn => observable =>
  new Observable(observer => {
    observable.subscribe({
      ...observer,
      next: val => observer.next(fn(val))
    })
  })

const filter = fn => observable =>
  new Observable(observer => {
    observable.subscribe({
      ...observer,
      next: val => (fn(val) ? observer.next(val) : () => {})
    })
  })

const take = count => observable => {
  let start = 0
  return new Observable(observer => {
    observable.subscribe({
      ...observer,
      next: val => (start++ < count ? observer.next(val) : () => {})
    })
  })
}

module.exports = { map, filter, take }
