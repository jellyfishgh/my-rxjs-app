module.exports = (createObservable, observer) => {
  createObservable('5').subscribe(observer)
  createObservable('3', 5).subscribe(observer)
  createObservable(3, 0).subscribe(observer)
  createObservable(0, 3).subscribe(observer)
  createObservable(0).subscribe(observer)
  createObservable(-1).subscribe(observer)
}
