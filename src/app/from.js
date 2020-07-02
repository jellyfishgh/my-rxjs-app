module.exports = (createObservable, observer) => {
  createObservable(['hello', 2, 2, { name: 'from' }]).subscribe(observer)
  createObservable(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('resolve') : reject('reject')
      }, 1000)
    })
  ).subscribe(observer)
}
