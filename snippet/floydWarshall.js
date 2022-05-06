// 최단 경로를 구하는 플로이드 와샬 알고리즘
// dp 배열 초기화: 보통 n x n 크기의 2차원 배열을 만들어준다.
const dp = new Array(n).fill().map(_ => new Array(n).fill(Infinity));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        dp[i][j] = original[i][j];
        // 연결된 노드의 정보와 연동해주는 과정이 필요하다.
    }
}

// k = 경유노드, i = 시작노드, j = 도착노드, n = 노드개수
// dp[i][j] = 노드 i 부터 노드 j 까지의 거리
// 기존에 구한 경로 값을 계속 다음 계산에 활용하기 때문에
// dp 기법을 사용하는 것.
for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][k] + dp[k][j] < dp[i][j]) {
                dp[i][j] = dp[i][k] + dp[k][j];
            }
        }
    }
}