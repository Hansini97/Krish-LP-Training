//Question3 : Write a program to find the missing number from a given sequence of numbers.

var Arr =[21,22,23,24,25,29,30];

let miss = [];
let index = 0;

for (let n = Arr[0]; n < Arr[Arr.length - 1]; n++) {

  if (Arr[index] === n) {

    index++;

  } else {

    miss.push(n);
  }
}


console.log(miss.join(' '));

