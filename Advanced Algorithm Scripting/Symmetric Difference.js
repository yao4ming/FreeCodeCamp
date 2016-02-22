function difference(arr1, arr2) {
  var arr = [];
  
  //A - B
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1 && arr.indexOf(arr1[i]) == -1) {
      arr.push(arr1[i]);
    }
  }
  //B - A
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) == -1 && arr.indexOf(arr2[i]) == -1) {
      arr.push(arr2[j]);
    }
  }
  return arr;
}

function sym(args) {
  
  var arr = difference(arguments[0], arguments[1]);
  for (var i = 2; i < arguments.length; i++) {
    arr = difference(arr, arguments[i]);
  }
  return arr;
}

sym([1, 2, 3], [5, 2, 1, 4]);
