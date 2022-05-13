// https://programmers.co.kr/learn/courses/30/lessons/60059

function solution(key, lock) {
    const rotateRight = (arr) => {
        const len = arr.length;
        const tmp = Array(len).fill().map(_ => Array(len).fill());
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                tmp[j][len-1-i] = key[i][j];
            }
        }
        return tmp;
    };
    
    const [keyLen, lockLen] = [key.length, lock.length];
    const totalLen = lockLen + keyLen*2 - 2;
    const board = Array(totalLen).fill().map(_ => Array(totalLen).fill());
    for (let i = keyLen-1; i < keyLen + lockLen -1; i++) {
        for (let j = keyLen-1; j < keyLen + lockLen -1; j++) {
            board[i][j] = lock[i-(keyLen-1)][j-(keyLen-1)];
        }
    }

    const isValid = (arr) => {
        for (let i = keyLen-1; i < keyLen + lockLen -1; i++) {
            for (let j = keyLen-1; j < keyLen + lockLen -1; j++) {
                if (arr[i][j] !== 1) return false;
            }
        }
        return true;
    };

    for (let rotate = 0; rotate < 4; rotate++) {
        key = rotate === 0 ? key : rotateRight(key);
        for (let i = 0; i <= totalLen - keyLen; i++) {
            for (let j = 0; j <= totalLen - keyLen; j++) {
                const boardCopy = board.map(arr => [...arr]);
                for (let r = 0; r < keyLen; r++) {
                    for (let c = 0; c < keyLen; c++) {
                        if (key[r][c] === 1 && boardCopy[i+r][j+c] === 1) boardCopy[i+r][j+c] = 2;
                        else if (key[r][c] === 1 && boardCopy[i+r][j+c] === 0) boardCopy[i+r][j+c] = 1;
                    }
                }
                if (isValid(boardCopy) === true) return true;
            }
        }
    }
    return false;
}


// testCase
console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))     // true