// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据

// const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
// }
console.log(articles,'articles')
// 拦截ajax请求，配置mock的数据
Mock.mock('/api/articles', 'get', articles)
Mock.mock('/api/articles', 'post', (params)=>{
  console.log(params)
  const [index,size,total] = [JSON.parse(params.body).pageIndex,JSON.parse(params.body).pageSize,articles.length]
  let len = total/size;
  console.log(index,size,total)
  const totalPages = len - parseInt(len) >0 ? parseInt(len)+1 : len
  const newProduceNewsData = articles.slice(index * size, (index+1)*size)
  return {
    code: '0',
    message: 'success',
    data:{
      pageIndex: index,
      pageSize: size,
      list: newProduceNewsData,
      total: total,
      totalPages: totalPages
    }
  }
})

