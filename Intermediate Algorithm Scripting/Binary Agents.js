function binaryAgent(str) {
  var substr = str.split(" ");
  var charCodes = [];
  for (var i = 0; i < substr.length; i++) {
    charCodes.push(binaryToDec(substr[i]));
  }
  return String.fromCharCode.apply(null, charCodes);
}

function binaryToDec(bin) {
  
  var dec = 0;
  for (var i = 0; i < bin.length; i++) {
    var temp = (bin[i] - '0') * Math.pow(2, bin.length - 1 - i);
    dec += temp;
  }
  return dec;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
