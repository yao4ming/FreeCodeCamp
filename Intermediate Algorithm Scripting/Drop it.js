function drop(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      arr.splice(i--,1);
    } else {
      break;
    }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
