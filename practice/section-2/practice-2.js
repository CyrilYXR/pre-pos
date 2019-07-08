'use strict';

function countSameElements(collection) {
  var result = [];
  var obj = {};
  //匹配非负整数
  var numReg = /^[0-9]+$/;
  //匹配26个英文字母组成的字符串
  var charReg = /^[A-Za-z]\ig/;
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
  console.log(result);  

  for(let x in obj){
    result.push({"key":x, "count":obj[x]});
  }
  return result;
}
