let express = require('express');
let app = express()

/* 
  정적인 파일이 들어있는 곳을 지정 
  이렇게 지정을 하면 재 리로드 할 필요가 없음
  동적인 파일을 서비스하는 것과 비교해 정적인 파일을 서비스 하는것이 더 좋다. node를 다시 실행시켜줘야 할 필요가 없음
*/
app.use(express.static('public'));

// app.get은 한번 실행시킨 다음에 바꾸려면 node를 다시 실행 해야함 ctrl + c 해야함
app.get('/dynamic', (req, res)=> {
  let lis = '';
  for(let i=0; i<5; i++) {
    lis = lis + `<li> ${i} </li>`
  }
  let date = new Date();
  let output = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>static</title>
    </head>
    <body>
      <p>Hello Static !</p>
      <ul>
        ${lis}
      </ul>
      ${date}
    </body>
  </html>`
  res.send(output)
})
app.listen(3001, ()=>{
  console.log('Connected 3001 port!')
})