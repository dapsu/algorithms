// https://programmers.co.kr/learn/courses/30/lessons/43162

// BFS
function solution(n, computers) {
    let result = 0;

    const visited = Array(n).fill(false);
    const queue = [];

    visited.forEach((elem, idx) => {
        if (elem === false) {
            queue.push(idx);
            visited[idx] = true;
            result++;
        }

        while (queue.length > 0) {
            const node = queue.shift();
            computers[node].forEach((_, i) => {
                if (node !== i && computers[node][i] === 1 && visited[i] === false) {
                    visited[i] = true;
                    queue.push(i);
                }
            });
        }
    });

    return result;
}


// DFS
// function solution(n, computers) {
//     let result = 0;

//     const visited = Array(n).fill(false);
    
//     const dfs = (node) => {
//         visited[node] = true;
//         computers[node].forEach((_, idx) => {
//             if (node !== idx && computers[node][idx] === 1 && visited[idx] === false) dfs(idx);
//         });
//     }

//     visited.forEach((elem, idx) => {
//         if (elem === false) {
//             result++;
//             dfs(idx);
//         }
//     });

//     return result;
// }


// testCase
console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));    // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));    // 1