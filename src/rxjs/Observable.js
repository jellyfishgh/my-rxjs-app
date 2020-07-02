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
      return this._subscribe({ ...defaultObserver, next: observer })
    }
    return this._subscribe({ ...defaultObserver, ...observer })
  }
}

module.exports = Observable
