let express = require('express');
// middleware
let bodyParser = require('body-parser')
let app = express();

// 기본 템플릿 세팅
app.set('view engine', 'pug')
app.set('views', './views')

//사용자가 post방식으로 전달한 데이터를 사용할 수 있도록 도움
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.send('Hello Post');
});

// ******** if(you use get)
app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/form_receiver', (req, res) => {
  let title = req.query.title;
  let description = req.query.description;
  res.send('get!: '+title+', '+ description)
});

// ******** else if(you use post)
app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/form_receiver', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  res.send('post!: '+ title+', '+ description)
});

app.listen(3004, () => {
  console.log('Connected 3004 port')
});