class Observable {
  _subscribe
  constructor(substribe) {
    this._subscribe = substribe
  }
  subscribe(observer) {
    const defaultObserver = {
      next: () => {},
      error: () => {},
      complete: () => {}
    }
    if (typeof observer === 'function') {
      observer = { next: observer }
    }
    return this._subscribe({ ...defaultObserver, ...observer }) || { subscribe: () => {} }
  }
  pipe(...fnList) {
    return fnList.reduce((x, y) => y(x), this)
  }
}

module.exports = Observable
