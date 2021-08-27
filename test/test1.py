import sys
n = int(sys.stdin.readline())
graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
dp = [[0] * (1 << n - 1) for _ in range(n)]  # 도시가 4개라면, 1000(각 자리수별로 도시 표시)

def solution(i, route):
    
    if dp[i][route] != 0:
        return dp[i][route]

    if route == (1 << (n - 1)) - 1:
        if graph[i][0]:
            return graph[i][0]
        else:
            return 1e9  # 1*(10**9)

    bound = 1e9
    
    for j in range(1, n):
        if not graph[i][j]:  # 간선 비용이 0이면
            continue
        if route & (1 << j - 1):  # 해당 도시를 방문했으면
            continue
        dist = graph[i][j] + solution(j, route | (1 << (j - 1)))
        if bound > dist:
            bound = dist
    dp[i][route] = bound

    return bound

print(solution(0, 0))