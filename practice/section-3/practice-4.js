'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var obj = {};

  collectionA.forEach(e => {
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
    result.push({"key":x, "count":obj[x]});
  }

  result.forEach(element => {
    for(let i=0;i<objectB.value.length;i++){
      if(element.key==objectB.value[i]){
        element.count-=Math.floor(element.count / 3);
        break;
      }
    }
  });
  return result;
}
