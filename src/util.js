let isUseRxjs = true
isUseRxjs = false

module.exports = {
  _import: path => require(isUseRxjs ? path : `./${path}`)
}
