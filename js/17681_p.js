// https://school.programmers.co.kr/learn/courses/30/lessons/17681


function solution(n, arr1, arr2) {
  const result = [];

  // 비트연산으로 두 배열 이진수 합치기
  for (let i = 0; i < n; i++) {
    let tmp = arr1[i] | arr2[i];
    tmp = tmp.toString(2);
    if (tmp.length < n) {
      tmp = '0'.repeat(n - tmp.length) + tmp;
    }
    tmp = [...tmp].map(e => e === '1' ? '#' : ' ').join('');
    result.push(tmp);
  }
  return result;
}

// testCase
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));   // ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));   // ["######", "### #", "## ##", " #### ", " #####", "### # "]
