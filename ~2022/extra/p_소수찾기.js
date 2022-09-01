// 소수 반환 함수
function primeNum(num) {
    for (let i=2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 순열 함수
const permutations = function(arr, selectNum) {
    const result = [];

    // 조합 개수가 1개면 바로 모든 배열의 원소 반환
    if (selectNum === 1) {
        return arr.map(value => [value]); // map 메소드를 이용해 배열의 원소 각각을 배열로 반환할 수 있도록
    }

    arr.forEach((fixed, index, origin) => {

        // 처음 선택한 원소(fixed) 제외한 나머지 원소들(순열 조합 위해)
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];

        // 나머지 원소들로 순열 재귀
        const rePermutations = permutations(rest, selectNum-1);

        // fixed + 재귀로 구한 순열
        const attached = rePermutations.map(permutation => [fixed, ...permutation]);

        result.push(...attached);
    });
    return result;
};


function solution(numbers) {
    const arr = [...numbers];
    const permuArr = new Array;
    
    for (let i = 1; i <= arr.length; i++) {
        permuArr.push(...permutations(arr, i).map(e => Number(e.join(""))));
    }

    const set = new Set(permuArr);
    
    return [...set].filter(e => e !== 0).filter(e => e !== 1).filter(e => primeNum(e)).length;
}

console.log(solution("17"));
console.log(solution("011"));