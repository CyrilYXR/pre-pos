'use strict';

function countSameElements(collection) {
  var result = [];
  var obj = {};

  collection.forEach(e => {
    if(e.replace(/[^0-9]/g,"")!=""){  // 全文查找包含数字的elem
      let num = parseInt(e.replace(/[^0-9]/g,""));
      let elem = e.replace(/[^A-Za-z]/g,"");
      if(obj[elem]){
        obj[elem]+=num;
      }else{
        obj[elem] = num;
      } 
    }else if(obj[e]){
      obj[e]++;
    }else{
      obj[e] = 1;
    }
  }); 

  for(let x in obj){
    result.push({"name":x, "summary":obj[x]});
  }
  return result;
}
