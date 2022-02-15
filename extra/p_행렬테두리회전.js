// 행렬 생성 함수
const createMatrix = (r, c) => {
    const matrix = new Array(r).fill().map(() => Array(c).fill());

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            matrix[i][j] = c * i + j + 1;
        }
    }
    
    return matrix;
};

// 회전 수행 함수
const rotation = (arr, x1, y1, x2, y2) => {
    const tmp = arr;

    for (let i = 0; i < y2 - y1; i++) tmp[x1][y1+i] = arr[x1]

};

function solution(rows, columns, queries) {
    const result = new Array;
    let matrix = createMatrix(rows, columns);

    queries =  queries.map(elem => elem.map(e => e-1));
    
    queries.forEach(([x1, y1, x2, y2]) => {
        const tmp = new Array;
        for (let i = 0; i <= y2 - y1; i++) {
            tmp.push(matrix[x1][y2-i]);
            tmp.push(matrix[x2][y2-i]);
        }

        for (let i = 0; i < x2-x1; i++) {
            if (!tmp.includes(matrix[x2-i][y2]) && !tmp.includes(matrix[x2-i][y2-y1-1])) {
                tmp.push(matrix[x2-i][y2]);
                tmp.push(matrix[x2-i][y2-y1-1]);
            }
        }
        
        result.push(Math.min(...tmp));

        // rotation
        matrix = rotation(matrix, x1, y1, x2, y2);
    });

    return result;
}



// testCase
console.log(solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]));               // [8, 10, 25]
// console.log(solution(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));     // [1, 1, 5, 3]
// console.log(solution(100, 97, [[1,1,100,97]]));     // [1]