// https://programmers.co.kr/learn/courses/30/lessons/76503

const solution = (a, edges) => {
    const tree = Array(a.length).fill().map(e => []);
    edges.forEach(([u, v]) => {
        tree[u].push(v);
        tree[v].push(u);
    });
    
    const stack = [ [0, -1] ];  // 0은 시작 노드(루트), -1은 부모 노드
    const visited = Array(a.length).fill(false);

    let result = 0n;    // 정수 뒤에 n을 붙이면 BigInt 자료형으로 인식  or result = BigInt(0)
    while (stack.length > 0) {
        const [start, parent] = stack.pop();

        if (visited[start]) {
            a[parent] += a[start];
            result += BigInt(Math.abs(a[start]));
            continue;
        }

        stack.push([start, parent]);
        visited[start] = true;

        for (const next of tree[start]) {
            if (!visited[next]) stack.push([next, start]);
        }
    }

    return a[0] ? -1 : result;
}


// testCase
console.log(solution([-5,0,2,1,2], [[0,1],[3,4],[2,3],[0,3]]));     // 9
// console.log(solution([0,1,0], [[0,1],[1,2]]));     // -1