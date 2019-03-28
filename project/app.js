let express = require('express');

let app = express();
// 정적인 파일이 들어있는 곳을 지정 
// 이렇게 지정을 하면 재 리로드 할 필요가 없음
// 동적인 파일을 서비스하는 것과 비교해 정적인 파일을 서비스 하는것이 더 좋다. node를 다시 실행시켜줘야 할 필요가 없음
app.use(express.static('public'));
// app.get은 한번실행시킨 다음에 바꾸려면 node를 다시 실행 해야함 ctrl + c 해야함
app.get('/dynamic', (req, res)=> {
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
      ${lis}
    </body>
  </html>`
  let lis = '';
  for(let i=0; i<5; i++) {
    lis = lis + `<li> ${i} </li>`
  }
  res.send(output)
  res
})
/* 
  url을 직접 치고 들어오는 것 get 방식
  home으로 접속한 사용자 에게 보여주는 메시지
*/
app.use(express.static('public'));
app.get('/', (req, res) => {
  // 사용자에게는 응답을 해줘야 함으로
  res.send('Hello home page');
});
app.get('/route', function(req, res){
  res.send('Hello Router, <img src="img2.jpg">')
})
// 이거 route : 길을 찾는다. 어떤 요청이 들어 왔을때 길을 찾을 수 있도록 연격 해주는것
app.get('/login', (req, res) => {
  res.send('Login please');
})

/*
req 요청에 대한 객체를 전달 할 수 있는 
res 응답에 대한 객체를 전달 할 수 잇는
홈페이지 들어가는 법 
 localhost:3000/ <= 마지막에 이거 붙이기
*/
app.listen( 3000, () => {
  console.log('Connected 3000 port')
}); // 포트 번호 지정, 3000번을 바라보고 있고, 