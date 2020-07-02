const { _import } = require('../util')

const { range } = _import('rxjs')

module.exports = {
  name: 'range',
  run: observer => {
    range('5').subscribe(observer)
    range('3', 5).subscribe(observer)
    range(3, 0).subscribe(observer)
    range(0, 3).subscribe(observer)
    range(0).subscribe(observer)
    range(-1).subscribe(observer)
  }
}
