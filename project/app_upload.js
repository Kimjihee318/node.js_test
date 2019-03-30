let express = require('express');
let multer = require('multer');

/*
 업로드를 할 수있는 것을 받아주는 middle ware
 diskStorage는 객체 리터럴 ({ blah})
 cb는 콜백함수 
*/
let _storage = multer.diskStorage({
  destination(req, file, cb) {
    // 디렉토리 지정
    cb(null, 'uploads/')
    /*
      ex) if(파일이 이미지이면) cb(null, 'upload/images)
          else(파일이 이미지이면) cb(null, 'upload/text)
    */
    
  },
  filename(req, file, cb) {
    // 파일 이름 지정
    cb(null, file.originalname)
    /*
      ex) if(동일한 파일이 계속 올라간다면) cb(null, file.originalname' + n);
    */

  }
});

var upload = multer({ storage: _storage });

let app = express();
app.set('views', './views_file');
app.set('view engine', 'pug');
app.use('/user', express.static('uploads'));

app.locals.pretty = true;
// step1. 사용자가 파일을 업로드 하기 위한 form을 먼저 만드시오.
app.get('/upload', (req, res) => {
  res.render('upload_form')
});
/* form에서 post방식으로 잘 전송되었다는 것을 확인하는 화면!!!
 upload는 미들웨어가 req가 접근하기 전에 파일을 저장하는 객체를 알아서 먼저 만들어줌
 upload.single('avatar')을 할 경우 MulterError: Unexpected field가 뜨는데
 form의 input창의 name인 userfile과 일치 시켜줘햐 한다.
*/
app.post('/upload', upload.single('userfile'), (req, res) => {
  let fileInfo = req.file;
  res.send('Upload:' + JSON.stringify(fileInfo.fieldname));
})
app.listen(3011, () => {
  console.log('Connected 3011 port !!!');
})