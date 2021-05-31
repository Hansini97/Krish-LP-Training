function quick(Arr) {

    if (Arr.length <= 1) {

      return Arr;

    }
  
    var pivot = Arr[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < Arr.length; i++) {

      Arr[i] < pivot ? left.push(Arr[i]) : right.push(Arr[i]);

    }
  
    return quick(left).concat(pivot, quick(right));
    
  };
  
  var Arr = [23, 45, 16, 37, 3, 99, 3, 22];
 // var sort = quick(unsort);
  
  //console.log('Sorted Arr', sort);

  module.exports = quick(Arr);
  