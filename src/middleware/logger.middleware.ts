// 函数式中间件
export function logger(req, rex, next) {
  console.log('request>>>');
  next();
}
