dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

M, N = map(int, input().split())
travel_map = [list(map(int, input().split())) for _ in range(M)]
dp = [[-1]*N for _ in range(M)]
dp[M-1][N-1] = 1

def dfs(x, y):
    if dp[x][y] != -1:
        return dp[x][y]

    tmp = 0
    for i in range(len(dx)):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < M and 0 <= ny < N and travel_map[x][y] > travel_map[nx][ny]:
            tmp += dfs(nx, ny)
    dp[x][y] = tmp
    return dp[x][y]

print(dfs(0,0))