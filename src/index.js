// https://zhuanlan.zhihu.com/p/146795979
// https://github.com/ReactiveX/RxJS

const startApp = app => {
  const observerList = [
    {
      next: v => console.log('next', v),
      error: v => console.log('error', v),
      complete: v => console.log('complete', v, '\n')
    },
    console.log
  ]
  console.log('---', app.name, '---\n')
  observerList.forEach(observer => app.run(observer))
  console.log('\n\n')
}

startApp(require('./app/of'))
