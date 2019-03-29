let express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello sementic');
});
// parameter 방식으로 접근하는 법
app.get('/topic/:id', (req, res) => {
  let sementic = req.params.id
  // path방식으로 들어오는 경우 params 객체를 이용
  res.send(sementic);
});

app.get('/topic/:id/:mode',(req, res)=>{ 
  res.send(req.params.id+''+req.params.mode)
})

app.listen(3003, () => {
  console.log('Connected 3003 port')
});