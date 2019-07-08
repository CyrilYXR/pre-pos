'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  var collectionBValue=objectB.value;
  for(let i=0; i<collectionA.length; i++){
    for(let j=0; j<collectionBValue.length; j++){
      if(collectionA[i]==collectionBValue[j]){
        result.push(collectionA[i]);
        break;
      }
    }
  }
  return result;
}
