function sumFibs(num) {
  var sum = 0;
  var prev = 0;
  var curr = 1;
  
  while (curr <= num) {
    if (curr % 2 === 1) {
      sum += curr;
    }
    var temp = prev;
    prev = curr;
    curr += temp;
  }
  
  return sum;
 
}

sumFibs(4);
