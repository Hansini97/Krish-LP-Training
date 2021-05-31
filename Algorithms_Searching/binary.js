let arr = [ 6, 8, 10, 12, 14, 16, 18, 20]


function binary(arr,val){

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== val && start <= end) {

        if (val < arr[mid]) 
            end = mid - 1

        else
            start = mid + 1
        
        mid = Math.floor((start + end) / 2);
    }

    return (arr[mid] === val) ? "Index is: "+ mid : "Not Found!";  

}

//console.log(binary(arr, 16));
//console.log(binary(arr, 30));

module.exports = binary(arr, 16);
