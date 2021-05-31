function merge(left, right){

    let Arr = [];

    while(left.length && right.length){

        if(left[0] < right[0]){

            Arr.push(left.shift());

        }else{

            Arr.push(right.shift());
        }
    } 

    return[...Arr, ...left, ...right];
}

function mergeSort(Arr){
    const part = Arr.length / 2;

    if(Arr.length < 2){
        return Arr;
    }

    const left = Arr.splice(0,part);
    return merge(mergeSort(left), mergeSort(Arr));
}

let Arr = [2, 4, 7, 22, 41, 55, 3, 1, 2];
//console.log(mergeSort(Arr));

module.exports = mergeSort(Arr);