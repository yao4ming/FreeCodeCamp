function inventory(arr1, arr2) {
    var currInv = new Map();
    var arr = [];
    
    for (var i = 0; i < arr1.length; i++) {
        currInv.set(arr1[i][1], arr1[i][0]);
    }
    
    for (var j = 0; j < arr2.length; j++) {
        var numItems = arr2[j][0];
        var item = arr2[j][1];
        
        //Map has faster lookup than O(n)
        if (currInv.has(item)) {
            currInv.set(item, currInv.get(item)+numItems);
        } else {
            currInv.set(item, numItems);
        }
    }
    
    //map to array
    currInv.forEach(function(numItems, item) {
        arr.push(new Array(numItems, item));
    });
  
    //sort array
    var sortedArr = arr.sort(function(a, b) {
      if (a[1] == b[1]) return 0;
      else return (a[1] < b[1]) ? -1 : 1;
    });
  
    return sortedArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

inventory(curInv, newInv);

