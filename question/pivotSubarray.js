'use strict';

/**
 * [1, 2, 3, 4, 6] => return 3
 * 인덱스 3을 기준으로 배열을 두 개로 나뉘었을 때, 첫 번째 배열의 원소 1, 2, 3의 합과 두 번째 배열원소의 합과 같음
 * 
 * [1, 2, 3, 3] => return 2
 * 마찬가지. 2번 인덱스 기준으로 하위 배열들의 합 같음
 * 
 * [1, 2, 1] => return 1
 */


/*
 * Complete the 'balancedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSum(arr) {
    // Write your code here
    let result;

    for (let i = 1; i < arr.length-1; i++) {
        const subArr1 = arr.slice(0, i+1);
        const subArr2 = arr.slice(i);
        if (subArr1.reduce((a, b) => a+b) === subArr2.reduce((a, b) => a+b)) {
            result = i;
            break;
        }
    }

    return result;
}