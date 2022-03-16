// https://programmers.co.kr/learn/courses/30/lessons/86052

function solution(grid) {
    const result = [];
    const gridRow = grid.length;
    const gridCol = grid[0].length;
    const routes = {};

    // 그리드의 행렬의 요소가 방문한 경로면 true로 표시
    for (let i = 0; i < gridRow; i++) {
        routes[i] = {};
        for (let j = 0; j < gridCol; j++) {
            routes[i][j] = {
                up: false, down: false, left: false, right: false
            };
        }
    }

    // 모든 경로를 탐색하기 위해서 bfs 활용
    const bfs = (startRow, startCol, startDir) => {
        const queue = [[startRow, startCol, startDir, 0]];

        while (true) {
            let [r, c, dir, cnt] = queue.shift();

            if (r === gridRow) r = 0;               // r이 그리드 행의 길이와 같다면 다시 처음 행으로 이동(범위 넘어가기 때문)
            else if (r === -1) r = gridRow -1;      // r이 -1이라는 것은 그리드의 끝을 넘어가서 반대쪽 끝으로 넘어간 경우
            
            if (c === gridCol) c = 0;
            else if (c === -1) c = gridCol -1;

            // 한 사이클을 돌았을 경우 이동 횟수인 cnt 반환
            if (r === startRow && c === startCol && dir === startDir && cnt) return cnt;

            routes[r][c][dir] = true;      // 방문한 경로는 true로 변환

            switch (grid[r][c]) {
                case "S":
                    queue.push(
                        dir === "up" ? [r+1, c, "up", cnt+1]
                        : dir === "down" ? [r-1, c, "down", cnt+1]
                        : dir === "left" ? [r, c+1, "left", cnt+1]
                        : [r, c-1, "right", cnt+1]
                    );
                    break;
                case "L":
                    queue.push(
                        dir === "up" ? [r, c+1, "left", cnt+1]
                        : dir === "down" ? [r, c-1, "right", cnt+1]
                        : dir === "left" ? [r-1, c, "down", cnt+1]
                        : [r+1, c, "up", cnt+1]
                    );
                    break;
                case "R":
                    queue.push(
                        dir === "up" ? [r, c-1, "right", cnt+1]
                        : dir === "down" ? [r, c+1, "left", cnt+1]
                        : dir === "left" ? [r+1, c, "up", cnt+1]
                        : [r-1, c, "down", cnt+1]
                    );
                    break;
            }
        }
    }
    
    // 사이클 시작
    const dirArr = ["up", "down", "left", "right"];
    for (let i = 0; i < gridRow; i++) {
        for (let j = 0; j < gridCol; j++){
            dirArr.map((dir) => {
                if (routes[i][j][dir] === false) result.push(bfs(i, j, dir));
            })
        }
    }

    return result.sort((a, b) => a - b);
}


// testCase
console.log(solution(["SL","LR"]));     // [16]
console.log(solution(["S"]));           // [1, 1, 1, 1]
console.log(solution(["R","R"]));       // [4, 4]


// ref: https://dev-note-97.tistory.com/302

/** 효율 별로 좋지 않음. 보완할 수 있는 부분 생각해보기
테스트 1 〉	통과 (1.16ms, 30.2MB)
테스트 2 〉	통과 (1.56ms, 29.7MB)
테스트 3 〉	통과 (1.30ms, 30.3MB)
테스트 4 〉	통과 (57.40ms, 36.5MB)
테스트 5 〉	통과 (69.79ms, 39.7MB)
테스트 6 〉	통과 (67.19ms, 39.8MB)
테스트 7 〉	통과 (366.68ms, 88.6MB)
테스트 8 〉	통과 (245.31ms, 61.8MB)
테스트 9 〉	통과 (171.43ms, 75.7MB)
테스트 10 〉	통과 (338.02ms, 96.5MB)
테스트 11 〉	통과 (332.12ms, 103MB)
 */