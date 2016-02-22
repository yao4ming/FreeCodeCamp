function steamroller(arr) {
  
  var newArr = [];
  return steam(arr, newArr);
}

function steam(arr, newArr) {
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      steam(arr[i], newArr);
    }
  }
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);