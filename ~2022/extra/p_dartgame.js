function solution(dartResult) {
    let iter = [...dartResult];
    let num;
    let tmp = [];

    for (const [index, value] of iter.entries()) {
        if (!isNaN(value)) {
            // 10인 경우 예외처리
            if (value === '0') {
                if (iter[index-1] === '1') {
                    num = 10;
                }
                else num = 0;
            }
            else num = value;
        }
        else if (value === 'S') tmp.push(num**1);
        else if (value === 'D') tmp.push(num**2);
        else if (value === 'T') tmp.push(num**3);
        else if (value === '*') {
            tmp[tmp.length-2] = tmp[tmp.length-2]*2;
            tmp[tmp.length-1] = tmp[tmp.length-1]*2;
        }
        else if (value === '#') tmp[tmp.length-1] = tmp[tmp.length-1]*(-1);
    }

    return tmp.reduce((a, b) => a + b, 0);
}


// tsetCase
// console.log(solution('1S2D*3T'));   // 37
// console.log(solution('1D2S#10S'));   // 9
// console.log(solution('1D2S0T'));   // 3
// console.log(solution('1S*2T*3S'));   // 23
// console.log(solution('1D#2S*3S'));   // 5
console.log(solution('1D2S3T*'));   // 59