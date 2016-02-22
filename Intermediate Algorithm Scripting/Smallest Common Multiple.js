function isMultipleFromRanges(beg, end, multiple) {
  for (; beg <= end; beg++) {
    if (multiple % beg !== 0) {
      return false;
    }
  }
  return true;
}

function smallestCommons(arr) {
  
  //make sure arr[0] < arr[1]
  if (arr[0] > arr[1]) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  
  var multiple = 0;
  
  //keep trying multiples of arr[i]
  while (true) {
    
    multiple += arr[1];

    if (isMultipleFromRanges(arr[0], arr[1]-1, multiple)) {
      return multiple;
    }
  }
}


smallestCommons([1,5]);
