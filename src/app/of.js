const { _import } = require('../util')

module.exports = (createObservable, observer, isUseRxjs) => {
  const length = 8
  const observable = createObservable(...Array.from({ length }, (_, index) => index + 1))
  const { map, filter, take } = _import('rxjs/operators', isUseRxjs)
  observable
    .pipe(
      map(data => data * 2),
      filter(data => data < length),
      take(2)
    )
    .pipe(map(data => data * 3))
    .subscribe(observer)
}
