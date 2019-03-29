// 모듈 가져오기
let express = require('express');

// 사용하기
let app = express();
/* 
  url을 직접 치고 들어오는 것 get 방식
  home으로 접속한 사용자 에게 보여주는 메시지
*/
app.get('/', (req, res) => {
  // '/'는 path
  // 사용자에게는 응답을 해줘야 함 = res
  res.send('Hello home page + I using supervisor');
});
/* 
  route : 길을 찾는다. 
  어떤 요청이 들어 왔을때 길을 찾을 수 있도록 연격 해주는것
*/
app.get('/route', function(req, res){
  res.send('Hello Router, <img src="img2.jpg">')
})
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