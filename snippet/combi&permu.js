// Combinations

const combinations = function(arr, selectNum) {
    const result = [];

    // 조합 개수가 1개면 바로 모든 배열의 원소 반환
    if (selectNum === 1) return arr.map(value => [value]); // map 메소드를 이용해 배열의 원소 각각을 반환할 수 있도록

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


// permutations

const permutations = function(arr, selectNum) {
    const result = [];

    // 조합 개수가 1개면 바로 모든 배열의 원소 반환
    if (selectNum === 1) return arr.map(value => [value]); // map 메소드를 이용해 배열의 원소 각각을 배열로 반환할 수 있도록

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


// test

let arr1 = [1, 2, 3, 4]
console.log(combinations(arr1, 3));
console.log(permutations(arr1, 3));