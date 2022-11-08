/**
 * 문제: 만약 3*(5+2)-9 를 후위연산식으로 표현하면 352+*9-로 표현되며 결과는 12
 * 입력: 
 * 출력: 
 */

// my sol
function solution(postfix) {
  const stack = [];
  for (let i of postfix) {
    if (!isNaN(i)) stack.push(Number(i));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (i === "+") stack.push(lt + rt);
      else if (i === "-") stack.push(lt - rt);
      else if (i === "*") stack.push(lt * rt);
      else if (i === "/") stack.push(lt / rt);
    }
  }
  return stack[0];
}

// ref sol
// function solution() {

// }

// testCase
console.log(solution("352+*9-"));  // 12