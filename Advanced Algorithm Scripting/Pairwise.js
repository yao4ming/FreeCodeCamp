function pairwise(arr, arg) {
  var indices = [];
  
  //find indices
  outerloop:
  for (var i = 0; i < arr.length - 1; i++) {

    for (var j = i + 1; j < arr.length; j++) {
      
      if (arr[i] + arr[j] === arg && arr[i] >= 0 && arr[j] >= 0) {
        indices.push(i);
        indices.push(j);
        
        //can't be used again
        arr[i] = -1;
        arr[j] = -1;
        continue outerloop;
      }
    }
  }
  
  //sum up indices
  var sum = 0;
  for (var k = 0; k < indices.length; k++) {
    sum += indices[k];
  }
  
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
