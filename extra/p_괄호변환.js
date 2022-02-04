function solution(p) {
    let result = "";

    // 입력이 빈 문자열일 경우, 빈 문자열 반환
    if (p === "") {
        return "";
    }

    // 매개변수를 "균형 잡힌 괄호 문자열" 기준으로 u, v로 분리
    let left = 0;
    let right = 0;
    let flag = true;    // "올바른 괄호 문자열일 때 true"
    
    for (let i=0; i<p.length; i++) {
        if (p[i] === '(') left++;
        if (p[i] === ')') right++;

        if (right > left) flag = false;

        if (right === left) {
            if (flag == true) {
                result += p.slice(0, i+1);
                result += solution(p.slice(i+1, p.length));
                return result;
            }
            else {
                result += "(";
                result += solution(p.slice(i+1, p.length));
                result += ")";
    
                for (let j = 1; j < i; j++) {
                    if (p[j] === ')') result += '(';
                    if (p[j] === '(') result += ')';
                }
                return result;
            }
        }
    }
    
}


// testCase

console.log(solution("(()())()"));      // (()())()
console.log(solution(")("));      // ()
console.log(solution("()))((()"));      // ()(())()
console.log(solution("")); 