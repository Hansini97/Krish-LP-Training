function insertion(Arr) {

    let num = Arr.length;

        for (let i = 1; i < num; i++) {

            // Taking the first element in unsorted array
            let temp = Arr[i];

            // The last element of sorted array
            let j = i-1; 

            while ((j > -1) && (temp < Arr[j])) {

                Arr[j+1] = Arr[j];
                j--;
            }

            Arr[j+1] = temp;
        }

    return Arr;
}

var Arr = [2, 3, 5, 6, 1, 34, 21, 3];
//console.log(insertion(Arr));

module.exports = insertion(Arr);

