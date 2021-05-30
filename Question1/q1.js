//Question1 : Write a program to find the 3rd largest number from an array.

Arr = [1, 2, 4, 10, 20,100]

var largest = Arr[0];
var secondLargest = Arr[0];
var thirdLargest = Arr[0];

    for(var i=0; i < Arr.length; i++) {

        if(Arr[i]>largest){
            
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = Arr[i];
        }

        else if(Arr[i] > secondLargest && Arr[i] != largest) {

            secondLargest = largest;
            largest = Arr[i];
        }

        else if(Arr[i] > thirdLargest && Arr[i] != secondLargest) {

            thirdLargest = Arr[i];

        }

    }
    
    console.log(Arr);
    console.log("Third largest number is: ", thirdLargest);
