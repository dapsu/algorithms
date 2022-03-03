// 문제 확인해보기

const operator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
};

function solution(expression) {
    let answer = 0;
    const permutation = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-']
    ];
    const numArr = expression.split(/[^0-9]/).map(num => +num);
    const opArr = expression.match(/[\+\-\*]/g);
    
    for (const permu of permutation) {
        let copyNum = [...numArr];
        let copyOp = [...opArr];
        let opIdx = 0;
        
        while (true) {
            for (let i=0; i<copyOp.length; i++) {
                if (copyOp[i] === permu[opIdx]) {
                    copyNum[i] = operator[copyOp[i]](copyNum[i], copyNum[i + 1]);
                    copyNum.splice(i + 1, 1);
                    copyOp.splice(i, 1);
                    i--;
                }
            }
            opIdx++;
            
            if (copyNum.length === 1) break;
        }
        
        if (Math.abs(copyNum[0]) > answer) answer = Math.abs(copyNum[0]);
    }

    return answer;
}


// testCase
console.log(solution("100-200*300-500+20"))     // 60420
console.log(solution("50*6-3*2"))     // 300