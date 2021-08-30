import sys
n = int(sys.stdin.readline())
graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
dp = [[0] * (1 << n - 1) for _ in range(n)]  # 도시가 4개라면, 1000 --> 8(각 자리수별로 도시 표시)
                                             # size = 2**(n-1)

def solution(i, route):
    
    if dp[i][route] != 0:
        return dp[i][route]

    # 출발하는 도시를 0으로 정했기 때문에 모든 경로를 돌았을  때, 현위치(i)에서 0으로 갈 경우 추가
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
        dist = graph[i][j] + solution(j, route | (1 << (j - 1)))  # i -> j 간선 + j에서 다음 경로로 가는 간선
        if bound > dist:
            bound = dist
    dp[i][route] = bound

    # 루트가 15(1111)이 될 때까지 완전 탐색을 하고 오게 되므로 최소값 또한 갱신
    return bound

print(solution(0, 0))  # 순서는 상관X 사이클의 최소비용을 구하면 되기 때문에 임의의 도시 0에서 시작
print(dp)