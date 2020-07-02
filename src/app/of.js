const { _import } = require('../util')

const { of } = _import('rxjs')

module.exports = {
  name: 'of',
  run: observer => {
    of(1, 2, 3).subscribe(observer)
  }
}
