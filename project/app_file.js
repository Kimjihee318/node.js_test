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
  res.render('new');
});
// app.get('/topic') & app.get('/topic/:id')를 한번에 동시에 하기!!
app.get(['/topic', '/topic/:id'], (req, res) => {
  fs.readdir('data', (err, files) => {
    if(err) {
      res.status(500).send('Internet Server Error')
    }
    // id 값이 있을때 /topic/:id는 paramater
    let id = req.params.id;
    if(id) {
      fs.readFile('data/'+id, 'utf8', (err, data) => {
        if(err){
          res.status(500).send('Internet Server Error')
        }
        res.render('page', { title: id, texts: data });
      });
    }
    else {
      res.render('view', { topics: files });
    }
  });
});
app.post('/topic', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  fs.writeFile('data/'+ title, description, (err) => {
    if(err) {
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/'+ title);
  });
});

app.listen(3010, () => {
  console.log('Connected 3010 port')
}); 