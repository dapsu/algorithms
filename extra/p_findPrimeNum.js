function solution(n) {
    const arr = [...Array(n)].map((v, i) => i+1);
    
    
    for(let i=1; i<=n; i++) {
    	// 인덱스 2부터 반복문 돌면서 0이면 다시 다음 반복문을 돕니다.
        if(arr[i]===0) continue;
        
        // 각 인덱스(i)의 배수들을 0으로 지정해줍니다.
        for(let j=i*2; j<=n; j+=i) {
            arr[j] = 0;
        }
    }
    console.log(arr);
    // filter를 이용해 0이아닌 수들의 개수를 return합니다.
    return arr.filter(v => v!==0).length;
}


// testCase
console.log(solution(10));      // 4
console.log(solution(5));      // 3

