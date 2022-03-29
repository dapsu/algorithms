// https://programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
    let result = 0;

    // 배열 제어 최적화
    board = board.map(v => [...v]);
    
    // while 반복문을 통해 2x2블록이 깨지고 다음 라운드로 갈 때 상황 업데이트
    while (true) {
        // 2x2 이루는 블록의 시작 인덱스 저장
        const arr = [];
        for (let i = 0; i < m-1; i++) {
            for (let j = 0; j < n-1; j++) {
                if (board[i][j] &&
                    board[i][j] === board[i+1][j] &&
                    board[i][j] === board[i][j+1] &&
                    board[i][j] === board[i+1][j+1]) arr.push([i, j]);
            }
        }
        
        // 더 이상 깨질 블록이 없다면 0의 개수를 반환
        if (!arr.length) {
            board.forEach(row => {
                result += row.filter(v => !v).length;
            });
            return result;
        }

        // 깨질 블록을 0으로 처리
        for (let i = 0; i < arr.length; i++) {
            const row = arr[i][0];
            const col = arr[i][1];

            board[row][col] = 0;
            board[row+1][col] = 0;
            board[row][col+1] = 0;
            board[row+1][col+1] = 0;
        }
        
        // 위에 떠 있는 블록들 아래로 옮기기
        for (let i = m-1; i > 0; i--) {
            // if (!board[i].some((v) => !v)) continue;
            for (let j = 0; j < n; j++) {
                if (board[i][j] !== 0) continue;
                for (let k = i-1; k >= 0; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}


// testCase
console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));      // 14
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]	));      // 15