// 1차원 배열 숫자 순서대로 채울 때
const createArr = (n) => {
    const arr = [...Array(n)].map((v, i) => i+1);
    return arr;
};

console.log(createArr(10));

// 2차원 배열 숫자 순서대로 채울 때
const createMatrix = (r, c) => {
    const matrix = new Array(r).fill().map(() => Array(c).fill());

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            matrix[i][j] = c * i + j + 1;
        }
    }
    
    return matrix;
};

console.log(createMatrix(3, 4));