// 내 풀이 2차 시도: 굳굳

// 코드 중복 피하기 위해 함수로 만듦
const makeArr = (str) => {
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O' ,'P' ,'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    str = [...str.toUpperCase()];

    const arr = new Array;

    str.filter((e, i) => {
        if (abc.includes(str[i]) && abc.includes(str[i+1])) arr.push(str[i]+str[i+1]);
    });

    return arr;
};

function solution(str1, str2) {
    const arr1 = makeArr(str1);
    const arr2 = makeArr(str2);

    const set = new Set([...arr1, ...arr2]);
    let union = 0;          // 합집합
    let intersection = 0;   // 교집합
    
    set.forEach(v => {
        const tmp1 = arr1.filter(e => e === v).length;
        const tmp2 = arr2.filter(e => e === v).length;

        union += Math.max(tmp1, tmp2);
        intersection += Math.min(tmp1, tmp2);
    });
    
    return union === 0 ? 65536 : Math.floor(intersection/union*65536);
}


// // testCase
console.log(solution('FRANCE', 'french'));              // 16384
console.log(solution('handshake', 'shake hands'));      // 65536
console.log(solution('aa1+aa2', 'AAAA12'));             // 43690
console.log(solution('E=M*C^2', 'e=m*c^2'));            // 65536


/** array.prototype.concat()
 * Python의 extend와 같은 기능
 */