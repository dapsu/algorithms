// https://programmers.co.kr/learn/courses/30/lessons/49189

const solution = (n, edge) => {
    const dist = Array(n+1).fill(0);
    const visited = Array(n+1).fill(false);
    visited[1] = true;
    const queue = [1];

    while (queue.length) {
        const node = queue.shift();
        for (const [a, b] of edge) {
            if (a === node && visited[b] === false) {
                queue.push(b);
                visited[b] = true;
                dist[b] = dist[node] + 1;
            }
            else if (b === node && visited[a] === false) {
                queue.push(a);
                visited[a] = true;
                dist[a] = dist[node] + 1;
            }
        }
    }
    const maxDist = Math.max(...dist);

    return dist.filter(v => v === maxDist).length;
};


// testCase
console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));     // 3