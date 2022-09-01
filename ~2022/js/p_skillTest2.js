function solution(N, stages) {
  const failRating = new Array(N).fill(0);
  
  // 각 스테이지별 실패율 계산
  for (let i = 1; i <= N; i++) {
    let players = stages.length;
    stages = stages.filter(v => v !== i);
    failRating[i-1] = [i, (players - stages.length) / players];
  }
  
  // 실패율이 큰 스테이지부터 정렬. 실패율이 같다면 낮은 스테이지 우선
  failRating.sort((a, b) => b[1] - a[1]);
  
  return failRating.map(stage => stage[0]); 
}


// testCase
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));   // [3,4,2,1,5]
console.log(solution(4, [4,4,4,4,4]));    // [4,1,2,3]