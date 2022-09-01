function solution(board, moves) {
    let result = 0;
    let stack = [];

    for (const num of moves) {
        if (board[board.length-1][num-1] === 0) continue;

        for (let i = 0; i < board.length; i++){
            if (board[i][num-1] !== 0) {
                stack.push(board[i][num-1]);
                if (stack[stack.length-1] === stack[stack.length-2]) {
                    stack.pop();
                    stack.pop();
                    result += 2;
                }
                board[i][num-1] = 0;
                break;
            }
        }
    }
    
    return result;
}


// testCase
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))     // expected output: 4