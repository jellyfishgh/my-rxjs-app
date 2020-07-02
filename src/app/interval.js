module.exports = (createObservable, observer) => {
  createObservable(1000).subscribe(observer)
}
