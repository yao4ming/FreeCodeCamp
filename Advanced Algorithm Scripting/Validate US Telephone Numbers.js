function telephoneCheck(str) {

  var case1 = /^(1\s)?\d{3}-\d{3}-\d{4}$/;
  var case2 = /^(1\s?)?\(\d{3}\)\d{3}-\d{4}$/;
  var case3 = /^(1\s)?\(\d{3}\)\s\d{3}-\d{4}$/;
  var case4 = /^(1\s)?\d{3}\s\d{3}\s\d{4}$/;
  var case5 = /^(1\s)?\d{10}$/;
  
  return (str.match(case1) || str.match(case2) || str.match(case3) || str.match(case4) || str.match(case5)) ? true : false;
}

telephoneCheck("555-555-5555");
