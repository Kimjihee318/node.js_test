let express = require('express');

let app = express();
app.get('/topic', function(req, res){
 let topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];
  //req객체의 query객체의 id property
  let output = `
  <a href="/topic?id=0">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topics[req.query.id]}
  `
  res.send(output);
})
app.get('/notes', (req, res)=> {
  //req객체의 query객체의 note property
  let str = req.query.note;
  res.send(str)
})
app.get('/twoString', (req, res)=> {
  //req객체의 query객체의 note property
  let note_str = req.query.note;
  let id_str = req.query.id;
  res.send(note_str+', '+id_str)
})
// 웹에서 불러올땐 이 방식으로 http://localhost:2000/twostring?note=1&id=jihee
app.get('/', (req, res) => {
  res.send('Hello app2');
})
app.listen(2000, () => {
  console.log('Connected 2000 port')
}); // 포트 번호 지정, 2000번을 바라본다.
