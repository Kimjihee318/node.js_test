let express = require('express');
let bodyParser = require('body-parser');
let app = express();



// 1번. 
app.get('/topic/:id', function(req, res){
  let topics = [
     'Javascript is....',
     'Nodejs is...',
     'Express is...'
   ];
   //req객체의 query객체의 id property
   let output = `
   <a href="/topic/0">JavaScript</a><br>
   <a href="/topic/1">Nodejs</a><br>
   <a href="/topic/2">Express</a><br><br>
   ${topics[req.params.id]}
   `
   res.send(output);
});

// 2번.
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
});

app.listen(3005, () => {
  console.log('Connected 3004 port');
})

