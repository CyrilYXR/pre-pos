'use strict';

function countSameElements(collection) {
  var result = [];
  var obj = {};
  collection.forEach(v =>{
    if(obj[v]){
      obj[v]++;
    }else{
      obj[v] = 1;
    }
  });
  for(let x in obj){
    result.push({"key":x, "count":obj[x]});
  }
  return result;
}
