// https://programmers.co.kr/learn/courses/30/lessons/87946

// 순열을 통해 모든 경우의 수를 구해서 답을 구함. 이게 최선일까?
const permutations = (arr, num) => {
    const result = [];

    if (num === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const rePermu = permutations(rest, num-1);
        const attached = rePermu.map(permu => [fixed, ...permu]);

        result.push(...attached);
    });

    return result;
};

const checkFatigue = (arr, k) => {
    let result = 0;

    arr.forEach(([a, b]) => {   // a: 최소 필요 피로도, b: 소모 피로도
        if (k >= a) {
            k -= b;
            result++;
        }
        else return result;
    });
    return result;
}

function solution(k, dungeons) {
    let result = 0;

    const permuArr = permutations(dungeons, dungeons.length);     // 모든 경우의 수 담을 배열

    permuArr.forEach(elem => {  // a: 최소 피로도, b: 소모 피로도
       let fatigue = checkFatigue(elem, k);
       
       result = result < fatigue ? fatigue : result;
    });
    
    return result;
}


// testCase
console.log(solution(80, [[80,20],[50,40],[30,10]]));       // 3