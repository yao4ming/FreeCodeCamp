function isNum(val) {
  return typeof val === "number";
}

function add() {
  
  for (var i = 0; i < arguments.length; i++) {
    if (!isNum(arguments[i])) return undefined;
  }
  
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } 
  else if (arguments.length === 1) {
    
    var arg = arguments[0];
    return (function(num) {
        if (!isNum(num)) return undefined;
        else return arg + num;
    });
  } 
  else {
    return undefined;
  }
}

add(2,3);
