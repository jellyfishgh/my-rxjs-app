module.exports = (createObservable, observer) => {
  const subscription = createObservable(1000).subscribe(observer)
  setTimeout(subscription.unsubscribe, 3000)
}
