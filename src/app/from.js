const { _import } = require('../util')

const { of } = (module.exports = {
  name: 'of',
  run: observer => {
    _import('rxjs')[this.name](1, 2, 3).subscribe(observer)
  }
})
