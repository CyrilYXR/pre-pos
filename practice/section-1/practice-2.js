'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  for(let i=0; i<collectionA.length; i++){
    for(let k=0; k<collectionB.length; k++){
      for(let j=0; j<collectionB[k].length; j++){
        if(collectionA[i]==collectionB[k][j]){
          result.push(collectionA[i]);
          break;
        }
      }
    }
  }
  return result;
}
