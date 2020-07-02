module.exports = (createObservable, observer) => {
  createObservable(1, 2, 3).subscribe(observer)
}
