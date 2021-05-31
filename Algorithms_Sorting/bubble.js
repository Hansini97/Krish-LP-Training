var Arr = [2, 1, 3, 8, 6, 7, 9, 3];

function bubble(Arr) {

  for (var i = 0; i < Arr.length; i++) {         //Outer Loop

   for(var j=0; j < Arr.length - 1; j++){        //Inner Loop

    if (Arr[j] > Arr[j + 1]) {

      var num1 = Arr[j]
      var num2 = Arr[j + 1]

      Arr[j] = num2
      Arr[j + 1] = num1

     }

   }

  }

  return Arr;
}

//console.log(bubble(Arr));

module.exports = bubble(Arr);
