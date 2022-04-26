/*
 * Complete the 'findRange' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER num as parameter.
 */

function findRange(num) {
    // Write your code here
    num = num.toString();
    let maxNum = 0;
    let minNum = 0;
    
    let ptr = 0;
    while (ptr < num.length) {
        if (Number(num[ptr]) === 9) {
            ptr++;
            continue;
        }
        else {
            let rangeAll = new RegExp(num[ptr], 'g');
            maxNum = num.replace(rangeAll, 9);
            break;
        }
    }

    const firstNum = Number(num[0]);
    ptr = 1;
    while (ptr < num.length) {
        if (firstNum !== 1) {
            let rangeAll = new RegExp(num[0], 'g');
            minNum = num.replace(rangeAll, 1);
            break;
        }

        if (Number(num[ptr]) === 0) {
            ptr++;
            continue;
        }
        else {
            if (firstNum === Number(num[ptr])) ptr++;
            else {
                let rangeAll = new RegExp(num[ptr], 'g');
                minNum = num.replace(rangeAll, 0);
                break;
            }
        }
    }

    if (minNum === 0) minNum = num;

    return maxNum - minNum;
}


// testCase
console.log(findRange(123512));     // 820082
console.log(findRange(909));     // 898
console.log(findRange(111));     // 888
console.log(findRange(10018));     // 80088