module.exports = {
  _import: (path, isUseRxjs) => require(isUseRxjs ? path : `./${path}`)
}
