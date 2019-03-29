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

app.post('/topic', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  fs.writeFile('data/'+ title, description, (err)=>{
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.send('Success');
  })
})

app.listen( 3010, () => {
  console.log('Connected 3010 port')
}); 