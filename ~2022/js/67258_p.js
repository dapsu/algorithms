// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const gemCount = new Set(gems).size;  // 보석 종류의 개수
  const gemMap = new Map();   // 보석과 보석의 진열된 위치 매핑
  let result = [];

  gems.forEach((gem, index) => {
    // 맵에 기존 보석이 있다면 삭제 후 위치 최신화 (구간 더 짧게 하기 위해)
    if (gemMap.has(gem)) {
      gemMap.delete(gem);
    }
    gemMap.set(gem, index);
    // 맵의 크기와 보석의 개수가 같다면 result 배열에 값 추가
    if (gemMap.size === gemCount) {
      result.push([gemMap.values().next().value + 1, index + 1]);   // next() 통해 이터레이터 값 반환
    }
  });

  result.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {    // 구간이 같다면 먼저 진열된 값 앞으로 정렬
      return a[1] - b[1];
    }
    return (a[1] - a[0]) - (b[1] - b[0]);   // 구간이 짧은 값을 가장 앞으로 정렬
  })
  return result[0];
}


// testCase
console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]));   // [3,7]
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));    // [1,3]
console.log(solution(["XYZ", "XYZ", "XYZ"]));   // [1,1]
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));    // [1,5]