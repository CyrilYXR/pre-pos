'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  var result = [];
  var obj = {};
  collectionA.forEach(v =>{
    if(obj[v]){
      obj[v]++;
    }else{
      obj[v] = 1;
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
