function solution(places) {
    let result = [];
    
    const bfs = function(graph) {
        const move = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        const visited = Array(5).fill().map(() => Array(5).fill(false));
        const dist = Array(5).fill().map(() => Array(5).fill(0));
        let que = [];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (graph[i][j] === 'P') que.push([i,j]);
            }
        }

        while (que.length > 0) {
            let [x, y] = que.shift();
            visited[x][y] = true;

            move.forEach(([dx, dy]) => {
                let nx = x + dx;
                let ny = y + dy;

                if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && visited[nx][ny] === false) {
                    if (graph[nx][ny] === 'O') {
                        que.push([nx, ny]);
                        visited[nx][ny] = true;
                        dist[nx][ny] = dist[x][y] +1;
                    }

                    if (graph[nx][ny] === 'P' && dist[nx][ny] <= 1) return 0;
                }
            });
        }

        return 1;
    };

    for (const place of places) {
        place.map((r, c) => {
            place[c] = r.split('');
        });
        result.push(bfs(place));
    }

    return result;
}


// testCase
console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));    // [1, 0, 1, 1, 1]
