'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    for(let i=0;i<objectB.value.length;i++){
      if(element.key==objectB.value[i]){
        element.count-=Math.floor(element.count / 3);
        break;
      }
    }
  });
  return collectionA;
}
