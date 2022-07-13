function solution(n) {
  const result = [];

  const hanoi = (n, start, end, mid) => {
    // n이 1일 경우 start에서 end로 원반을 옮기면 끝
    if (n === 1) result.push([start, end]);
    else {
      // n >=2 경우 start에서 end에 가기 전에 mid에 돌을 잠시 옮겨둬야 함
      hanoi(n-1, start, mid, end);
      result.push([start, end]);
      // mid에 있던 돌을 다시 end로 옮기기
      hanoi(n-1, mid, end, start);
    }
  }

  hanoi(n, 1, 3, 2);

  return result;
}


// tsetCase
console.log(solution(2));   // [ [1,2], [1,3], [2,3] ]