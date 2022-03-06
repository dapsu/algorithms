// 문제 다시 풀어보기...!

function solution(h, w, n, board) {
    let result = 0;
    const move = [[1, 0], [1, 1], [0, 1], [1, -1]];

    const matrix = [];
    for (const i of board) {
        matrix.push([...i]);
    }

    const visited = Array(h).fill().map(() => Array(w).fill(false));

    const que = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (matrix[i][j] === "1") que.push([i, j]);
        }
    }

    while (que.length > 0) {
        let [x, y] = que.shift();

        move.forEach(([r, c]) => {
            const tmp = [];
            let count = 1;
            let nx = x + r;
            let ny = y + c;
            tmp.push([nx, ny]);
            while (tmp.length > 0) {
                let [tx, ty] = tmp.shift();
                if (0<=tx && tx<h && 0<=ty && ty<w && matrix[tx][ty]==="1") {
                    count += 1;
                    tx += r;
                    ty += c;
                    tmp.push([tx, ty]);
                }
            }
            if (count === n) result += 1;
            count = 1;
        });
    }

    return result;
}


// testCast
console.log(solution(7, 9, 4, ["111100000","000010011","111100011","111110011","111100011","111100010","111100000"]));  // 10
console.log(solution(5, 5, 5, ["11111","11111","11111","11111","11111"]));  // 12