// 소수일 때 true 반환하는 함수
function primeNum(num) {
    for (let i=2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// nums 배열 중 3개의 수를 더하는 것이 조건. 3중 for문으로 해결 가능하지만 성능면에서 너무 비효율적
// function solution(nums) {
//     let primeNumCnt = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             for (let k = j+1; k <nums.length; k++) {
//                 let sumNum = nums[i] + nums[j] + nums[k];
//                 if (primeNum(sumNum) === true) {
//                     primeNumCnt += 1;
//                 }
//             }
//         }
//     }
    
//     return primeNumCnt;
// }

// combination 함수 생성하여 재귀적으로 해결하기

// 조합 함수
function combinations(arr, selectNum) {
    const result = [];

    // 조합 개수가 1개면 바로 모든 배열의 원소 반환
    if (selectNum === 1) {
        return arr.map(value => [value]); // map 메소드를 이용해 배열의 원소 각각을 반환할 수 있도록
    }

    arr.forEach((fixed, index, origin) => {
        // 처음 선택한 원소(fixed) 제외한 나머지 원소들(재귀 조합 위해)
        const rest = origin.slice(index+1);

        // 나머지 원소들로 조합 재귀
        const reCombinations = combinations(rest, selectNum-1);

        // fixed + 재귀로 구한 조합
        const attached = reCombinations.map(combination => [fixed, ...combination]);

        result.push(...attached);
    });
    return result;
};

function solution(nums) {
    let primeNumCnt = 0;

    const combinationArr = combinations(nums, 3);

    combinationArr.forEach(elem => {
        let tmp = elem.reduce((a,b)=>a+b);
        
        if (primeNum(tmp) === true) {
            primeNumCnt += 1
        }
    });
    
    return primeNumCnt;
}




// testCase
console.log(solution([1,2,3,4]));
console.log(solution([1,2,7,6,4]));