var Arr = [3, 5, 2, 1, 9, 2, 19];
function selection(Arr) {

    for (let i = 0; i < Arr.length - 1; i++) {
  
      let min = i;

      for (let j = i + 1; j < Arr.length; j++) {

        if (Arr[j] < Arr[min]) {

          min = j;
        } 

      }

      [Arr[i], Arr[min]] = [Arr[min], Arr[i]];
    }

    return Arr;
  }

 // console.log(selection(Arr));

 module.exports = selection(Arr);