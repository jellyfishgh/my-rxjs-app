module.exports = (createObservable, observer) => {
  const subject = createObservable(1000).subscribe(observer)
  setTimeout(subject.unsubscribe, 3000)
}
