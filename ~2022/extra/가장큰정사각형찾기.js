function solution(board) {
    let result = 0;

    if (board.length <= 1 || board[0].length <= 1) return 1;

    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j]) {
                let min = Math.min(
                    board[i-1][j-1],
                    board[i][j-1],
                    board[i-1][j]
                );

                board[i][j] = min+1;
            }
            result = result < board[i][j] ? board[i][j] : result;
        }
    }

    return result**2;
}


// testCase
console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]));    // 9
console.log(solution([[0,0,1,1],[1,1,1,1]]));    // 4