function solution(price, money, count) {
    let result;
    let tmp = 0;

    for (let i=1; i<=count; i++) {
        tmp += price*i;
    }

    // if (tmp > money) {
    //     result = tmp - money;
    // } else {
    //     result = 0;
    // }
    
    // return result;
    return tmp > money ? tmp-money : 0;
}

// testCase

console.log(solution(3, 20, 4));