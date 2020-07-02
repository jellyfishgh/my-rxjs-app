module.exports = (createObservable, observer) => {
  createObservable(['hello', 2, 2, { name: 'from' }]).subscribe(observer)
  createObservable(
    new Promise(resolve => {
      setTimeout(() => {
        resolve('resolve')
      }, 1000)
    })
  ).subscribe(observer)
}
