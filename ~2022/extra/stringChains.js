/*
 * Complete the 'longestChain' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 */

function longestChain(words) {
    // Write your code here
    const result = [];
    const chain = (str, count) => {
        let res = count;
        // console.log();
        // console.log('First str?', str);
        // console.log('that count?', res);
        if (str.length === 1) {
            result.push(res);
            return;
        }
        for (let i = 0; i < str.length; i++) {
            let tmp = str.replace(str[i], '');
            if (words.includes(tmp)) {
                res++;
                // console.log('if words includes tmp, count?', res);
                chain(tmp, res);
                res--;
            }
            else {
                result.push(res);
                count = 1;
                continue;
            }
        }
    };

    words.forEach(word => {
        if (word.length !== 1) {
            chain(word, 1);
        }
    });
    
    return Math.max(...result);
}


// testCase
console.log(longestChain(['a', 'and', 'an', 'bear']));      // 3
console.log(longestChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']));      // 4
console.log(longestChain(['zxb', 'bca', 'bda', 'bdca', 'zxbe']));      // 2