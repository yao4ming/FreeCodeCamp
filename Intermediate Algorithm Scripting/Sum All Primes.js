function isPrime(num) {
  //special case 2 is the only even prime number
  if (num == 2) return true;

  //check if num is even, divisible by 2
  if (num % 2 === 0) return false;

  //check if num is divisible by odd numbers
  for (var i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
         return false;
      }
  }
  return true;
}

function sumPrimes(num) {
  
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);
