// https://school.programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmds) {
  /**
   * n: 처음 표의 행 개수
   * k: 처음에 선택된 행의 위치
   * cmds: 명령어들이 담긴 문자열 배열
   */
  const state = new Array(n).fill().map(_ => 0);  // 행의 삭제 상태 파악. 숫자로 삭제된 순서 파악
  let statePivot = 1;   // 삭제 상태에 순서 부여하기 위한 기준
  const lengthTable = n - 1;  // 표 길이
  
  let curColumn = k;
  cmds.forEach(value => {
    let [command, num] = value.split(' ');
    num = Number(num);
    
    if (command === 'D') {
      let tmp = state.slice(curColumn, num + 1);
      tmp = tmp.filter(num => num !== 0).length;
      curColumn += num;
      curColumn += tmp;
    }
    else if (command === 'U') {
      let tmp = state.slice(num, curColumn);
      tmp = tmp.filter(num => num !== 0).length;
      curColumn -= num;
      curColumn -= tmp;
    }
    else if (command === 'C') {
      state[curColumn] = statePivot;
      statePivot++;
      if (curColumn === lengthTable) {
        curColumn--;
      }
      else {
        curColumn++;
      }
    }
    else if (command === 'Z') {
      const index = state.indexOf(--statePivot);
      state[index] = 0;
    }
  });
  const result = state.map(value => {
    if (value === 0) {
      return value = 'O';
    }
    else {
      return value = 'X';
    }
  })
    .join('');
  return result;
}


// testCase
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]));   // "OOOOXOOO"
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]));   // "OOXOXOOO"