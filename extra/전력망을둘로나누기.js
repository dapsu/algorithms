// https://programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
    let result = Number.MAX_SAFE_INTEGER;

    const bfs = (node, link) => {
        let count = 0;
        const queue = [node];
        const visited = Array(n).fill(false);
        visited[node] = true;
        
        while (queue.length > 0) {
            const curNode = queue.shift();
            if (link.get(curNode) !== undefined) {
                link.get(curNode).forEach(nextNode => {
                    if (!visited[nextNode]) {
                        visited[nextNode] = true;
                        queue.push(nextNode);
                    }
                });
                count++;
            }

        }
        return count;
    };

    for (let i = 0; i < wires.length; i++) {
        const cutWires = wires.slice();
        let tmp = cutWires.splice(i, 1);
        const [[a, b]] = tmp;

        const links = new Map();
        cutWires.forEach(([x, y]) => {
            if (links.get(x) === undefined) links.set(x, [y]);
            else links.get(x).push(y);
            if (links.get(y) === undefined) links.set(y, [x]);
            else links.get(y).push(x);
        });

        const diff = Math.abs(bfs(a, links) - bfs(b, links));
        result = result > diff ? diff : result;
    }

    return result;
}


// testCase
console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]));    // 3
console.log(solution(4, [[1,2],[2,3],[3,4]]));      // 0
console.log(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]));    // 1