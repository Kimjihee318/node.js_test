let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;

app.set('views', './views_file')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.send('Hello Make File');
});

app.get('/topic/new', (req, res) => {
  //pug파일
  res.render('new');
});
app.get('/topic', (req, res) => {
  fs.readdir('data', (err, files) => {
    if(err) {
      res.status(500).send('Internet Server Error')
    }
      // render 넣고싶은 데이터를 객체로 따로 전달 가능
      res.render('view', { topics: files
      });
  });
});
// 변하는 url 은 /:id를 활용 해서 만듦 이건 파라메터 이용
app.get('/topic/:id', (req, res) => {
  let id = req.params.id;
  // res.send(id); 이경우 저장한 파일 이름이 들어온다. ******* ???
  fs.readFile('data/'+id, 'utf8', (err, data) => {
    if(err){
      res.status(500).send('Internet Server Error')
    }
      res.render('page', 
      { title: id,
        texts: data  
      })
  });
});
app.post('/topic', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  fs.writeFile('data/'+ title, description, (err) => {
    if(err) {
      console.log('err');
      res.status(500).send('Internal Server Error');
    }
    console.log('success');
    res.send('Success!!');
  });
});

app.listen( 3010, () => {
  console.log('Connected 3010 port')
}); 