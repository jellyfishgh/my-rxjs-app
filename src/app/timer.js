module.exports = (createObservable, observer) => {
  const subject = createObservable(1500).subscribe(observer)
  createObservable(500).subscribe(subject.unsubscribe)
  createObservable(1000).subscribe(observer)
}
