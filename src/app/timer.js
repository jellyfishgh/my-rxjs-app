module.exports = (createObservable, observer) => {
  const subscription = createObservable(1500).subscribe(observer)
  createObservable(500).subscribe(subscription.unsubscribe)
  createObservable(1000).subscribe(observer)
}
