/*
 * Complete the 'getFinalString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function getFinalString(s) {
    // Write your code here

    while (true) {
        if (s.includes('AWS')) {
            s = s.replace(/AWS/g, '');
            continue;
        }
        else break;
    }
    return s.length ? s : -1;
}


// testCase
console.log(getFinalString('AAWSWS'));      // -1
console.log(getFinalString('ABCDWS'));      // ABCDWS