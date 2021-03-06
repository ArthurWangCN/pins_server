const Koa = require('koa');

const app = new Koa();
const router = require('./router/router.js');

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())


// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.routes());
app.use(router.allowedMethods({
  // throw: true, // 抛出错误，代替设置响应头状态
  // notImplemented: () => '不支持当前请求所需要的功能',
  // methodNotAllowed: () => '不支持的请求方式'
}));


app.listen(3001, () => {
  console.log('应用已经启动，http://localhost:3001');
})