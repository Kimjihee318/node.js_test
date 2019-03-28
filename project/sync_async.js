// import 'fs';로 변환가능
var fs = require('fs');

//Sync
console.log(1); // 실행
var data = fs.readFileSync('text.txt', {encoding:'utf8'}); // 이게 실행이 끝날때까지 다음작업이 진행되지 않음
console.log(data); // 위의 작업이 끝나고 실행됨

// Async
console.log(2); // 실행
fs.readFile('data.txt', {encoding:'utf8'}, (err, data) => {
  console.log(3);
  console.log(data);
});// readfile이 실행되면서 >>> console.log(4)가 실행됨
// readfile이 실행이 끝나면 안의 콜백 함수가 실행됨
// readfile이 끝난것을 콜백 안의 함수가 나오는것으로 알 수 있음
console.log(4);