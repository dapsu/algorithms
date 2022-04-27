/*
 * Complete the 'getkthSmallestTerm' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. LONG_INTEGER k
 */

function getkthSmallestTerm(arr, k) {
    // Write your code here
    const cp_arr = [];
    
    for (const i of arr) {              // <----- 이중 for문 스택에 무리
        for (const j of arr) {
            cp_arr.push([i, j]);
        }
    }
    cp_arr.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;

        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;

        return a - b;
    });

    console.log(cp_arr);
    
    return cp_arr[k-1];
}

console.log(getkthSmallestTerm([2, 2, 1], 5));