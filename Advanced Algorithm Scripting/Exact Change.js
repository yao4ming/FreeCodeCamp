
function drawerEmpty(cid) {
  for (var i = 0; i < cid.length; i++) {
    if (cid[i][1] > 0) return false;
  }
  return true;
}

function transaction(register, amount, i) {
  register.moneyLeft[i][1] -= amount;
  register.moneyToUse[i][1] += amount;
  register.moneyToUse[i][1] = parseFloat(register.moneyToUse[i][1].toFixed(2));
  register.change -= amount;
}

function drawer(price, cash, cid) {
  var arr = [];
  var register = {
    change : cash - price,
    moneyLeft : cid,
    moneyToUse : [["PENNY", 0.00],["NICKEL", 0.00],["DIME", 0.00],["QUARTER", 0.00],["ONE", 0.00],                   ["FIVE", 0.00],["TEN", 0.00],["TWENTY", 0.00],["ONE HUNDRED", 0.00]]
  };
  
  while (register.change > 0) {
    if (register.change >= 100) {
      if (cid[8][1] > 0) {
        transaction(register, 100, 8);
        continue;
      }      
    } 
    if (register.change >= 20) {
      if (cid[7][1] > 0) {
        transaction(register, 20, 7);
        continue;
      }
    }
    if (register.change >= 10) {
      if (cid[6][1] > 0) {
        transaction(register, 10, 6);
        continue;
      }
    } 
    if (register.change >= 5) {
      if (cid[5][1] > 0) {
        transaction(register, 5, 5);
        continue;
      }
    } 
    if (register.change >= 1) {
      if (cid[4][1] > 0) {
        transaction(register, 1, 4);
        continue;
      }
    } 
    if (register.change >= 0.25) {
      if (cid[3][1] > 0) {
        transaction(register, 0.25, 3);
        continue;
      }
    } if (register.change >= 0.10) {
      if (cid[2][1] > 0) {
        transaction(register, 0.10, 2);
        continue;
      }
    } 
    if (register.change >= 0.05) {
      if (cid[1][1] > 0) {
        transaction(register, 0.05, 1);
        continue;
      }
    } 
    if (Math.ceil(register.change) >= 0.01) {
      if (cid[0][1] > 0) {
        transaction(register, 0.01, 0);
        continue;
      } else {
        return "Insufficient Funds";
      }
    } 
  }
  
  if (drawerEmpty(cid)) return "Closed";
  
  for (var i = 8; i >= 0; i--) {
    if (register.moneyToUse[i][1] > 0) {
      arr.push(new Array(register.moneyToUse[i]));
    }
  }
  console.log(arr);
  return arr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
