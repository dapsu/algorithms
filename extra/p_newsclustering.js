// Fail
function solution(str1, str2) {
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O' ,'P' ,'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arr1 = new Array;
    const arr2 = new Array;
    
    str1 = [...str1.toUpperCase()];
    str2 = [...str2.toUpperCase()];

    str1.filter((e, i) => {
        if (abc.includes(str1[i]) && abc.includes(str1[i+1])) arr1.push(str1[i]+str1[i+1]);
    });
    str2.filter((e, i) => {
        if (abc.includes(str2[i]) && abc.includes(str2[i+1])) arr2.push(str2[i]+str2[i+1]);
    });

    if (arr1.length === 0 && arr2.length === 0) return 65536;

    console.log(arr1, arr2);

    let tmp1 = arr1.filter(e => arr2.includes(e));
    let tmp2;
    if (arr1.length >= arr2.length) tmp2 = arr1.concat(arr2.filter(x => !arr1.includes(x)));
    else tmp2 = arr2.concat(arr1.filter(x => !arr2.includes(x)));
    console.log(tmp1, tmp2);    
    
    return Math.floor(tmp1.length/tmp2.length*65536);
}


// // testCase
console.log(solution('FRANCE', 'french'));              // 16384
console.log(solution('handshake', 'shake hands'));      // 65536
console.log(solution('aa1+aa2', 'AAAA12'));             // 43690
console.log(solution('E=M*C^2', 'e=m*c^2'));            // 65536