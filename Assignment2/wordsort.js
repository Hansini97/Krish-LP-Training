const calculateAlphabet = (word)=> {
    
    var sum = 0;

    var alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
  
    for (letters of word) {

      sum += alphabet[letters]

    }

    return sum;
  }

  const selectionSort=(inputArr)=> {

    let arrSize = inputArr.length;
    let i;
   
    for (i = 0; i < arrSize; i++) {

        // Finding the smallest number in the subarray
        let minValue = i;
        let j;

        for (j = [i + 1]; j < arrSize; j++) {

            if (inputArr[j] < inputArr[minValue]) {

                minValue = j;
            }
        }
        if (minValue != i) {
            // Swapping the elements
            let temp;

            temp = inputArr[i];
            inputArr[i] = inputArr[minValue];
            inputArr[minValue] = temp;
        }
    }

    return inputArr;

}

const equalNumbers=(value, name)=>{

    let n = 0;

    for (let m = 1; n < value.length;) {

        if (value[n] != value[m]) {

            n++;
            m++;

        } else {

            while (value[n] == value[m]) {

                m++;
            }

            let equalnum = name.slice(n, m);
            equalnum.sort();
            name.splice(n, (m - n), ...equalnum);
            n = m - 1;
        }
    }
}

const sortName=(Arr)=> {

    let value = []; 

    for (let i = 0; i < Arr.length; i++) {

        value[i] = calculateAlphabet(Arr[i].toLowerCase());
    }

    selectionSort(inputArr);
    equalNumbers(value, Arr);
    return Arr;
}


let inputArr=['anita','heili','isla','yanky','anny','naven', 'sophie', 'simron', 'marleigh', 'kobe', 'rahul', 'kenny', 'tom', 'ann', 'becca', 'carlos', 'gavin', 'fero', 'zenith', 'ollie', 'ninya', 'rose', 'pat', 'denver', 'john', 'kylie', 'umi', 'vivian', 'erick','sheily'];
console.log(sortName(inputArr));