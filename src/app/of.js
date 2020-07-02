const { _import } = require('../util')

module.exports = (createObservable, observer, isUseRxjs) => {
  const observable = createObservable(1, 2, 3, 4, 5, 6)
  const { map, filter } = _import('rxjs/operators', isUseRxjs)
  observable
    .pipe(
      map(data => data * 2),
      filter(data => data < 10)
    )
    .pipe(filter(data => data > 4))
    .subscribe(observer)
}
