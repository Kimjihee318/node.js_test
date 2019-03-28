let _ = require('underscore');
let arr = [3,2,6,8,1];

let first_arr = _.first(arr);
console.log(first_arr);

//if you want to get last arr should use this
let lastArr = arr[arr.length-1];
let last_arr = _.last(arr);

console.log(last_arr);