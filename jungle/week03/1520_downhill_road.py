dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

M, N = map(int, input().split())
travel_map = [list(map(int, input().split())) for _ in range(M)]
visited = [[-1] * N for _ in range(M)]  # 혼동 방지 위해 0이 아닌 -1로 채우기
visited[M-1][N-1] = 1  # 도착점 미리 1로 설정

def dfs(x, y):
    # visited가 -1이 아니면 이미 방문을 끝냈다는 의미로 visited값 반환
    if visited[x][y] != -1:
        return visited[x][y]

    tmp = 0
    for i in range(len(dx)):
        nx = x + dx[i]
        ny = y + dy[i]
        # 인접한 곳들 중 현재 위치(x, y)보다 작은 visited 값들의 합
        if 0 <= nx < M and 0 <= ny < N and travel_map[x][y] > travel_map[nx][ny]:
            tmp += dfs(nx, ny)
    visited[x][y] = tmp
    return visited[x][y]

print(dfs(0,0))