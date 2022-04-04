// https://programmers.co.kr/learn/courses/30/lessons/87377
// 한 번 더 풀기

const makeStars = (points) => {
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY= Number.MIN_SAFE_INTEGER;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;

    points.forEach(([x, y]) => {
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
    });

    const board = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill("."));

    points.forEach(([x, y]) => {
        board[maxY-y][x-minX] = "*";
    });

    return board.map(v => v.join(""));
};

function solution(line) {
    const coordinate = [];

    for (let i= 0; i < line.length-1; i++) {
        for (let j = i+1; j < line.length; j++) {
            const [a, b, e] = line[i];
            const [c, d, f] = line[j];

            const gradient = a*d - b*c;

            if (gradient !== 0) {
                const x = (b*f - e*d) / gradient;
                const y = (e*c - a*f) / gradient;

                if (Number.isInteger(x) && Number.isInteger(y)) coordinate.push([x, y]);
            }
        }
    }

    return makeStars(coordinate);
}


// testCase
console.log(solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]));     // ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
console.log(solution([[0, 1, -1], [1, 0, -1], [1, 0, 1]]));     // ["*.*"]
console.log(solution([[1, -1, 0], [2, -1, 0]]));        // ["*"]
console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]]));        // ["*"]