var Arr = [11,22,33,24,55,26,237,48,29,310]

function linear(Arr, element) {
    // Go through all the elements of Arr to look for element.
    for (var i = 0; i < Arr.length; i++) {

      if (Arr[i] === element) { // Found it!

        return i;

      }
    }
    
    // element not found in the Array.
    return null;

  }


//let element = linear(Arr, 48);
// console.log(element); 

// element = linear(Arr, 29);
// console.log(element); 

module.exports = linear(Arr, 48);


