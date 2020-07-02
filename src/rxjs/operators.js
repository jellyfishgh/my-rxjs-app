const Observable = require('./Observable')

const map = fn => observable =>
  new Observable(observer => {
    observable.subscribe({
      next: val => observer.next(fn(val)),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  })

const filter = fn => observable =>
  new Observable(observer => {
    observable.subscribe({
      next: val => (fn(val) ? observer.next(val) : () => {}),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  })

module.exports = { map, filter }
