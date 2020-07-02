module.exports = (createObservable, observer) => {
  createObservable(1500).subscribe(observer)
  createObservable(500).subscribe(observer)
}
