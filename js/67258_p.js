// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const gemList = [...new Set(gems)];   // 보석 리스트. 모든 종류의 보석 1개 이상 포함하기 위한 기준
  if (gemList.length === 1) {
    return [1, 1];
  }
  const isValid = (arr) => {
    for (const gem of gemList) {
      if (!arr.includes(gem)) {
        return false;
      }
    }
    return true;
  };
  let result = [1, 100000];
  for (let i = 0; i < gems.length - gemList.length; i++) {
    for (let j = gems.length; j >= gemList.length; j--) {
      // 1. 해당 구간에서 적어도 1개 이상의 보석을 포함하는지 검사
      const tmp = gems.slice(i, j);
      if (!isValid(tmp)) {
        continue;
      }
      // 2. 모든 보석을 포함하는 구간이라면, 구간의 길이 비교
      if (result[1] - result[0] > j - (i + 1)) {
        result = [i + 1, j];
      }
    }
  }
  return result;
}


// testCase
console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));   // [3,7]
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));    // [1,3]
console.log(solution(["XYZ", "XYZ", "XYZ"]));   // [1,1]
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));    // [1,5]