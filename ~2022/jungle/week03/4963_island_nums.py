from collections import deque

# 인접한 대각선 움직임도 고려
dx = [-1, 1, 0, 0, -1, 1, -1, 1]
dy = [0, 0, -1, 1, -1, -1, 1, 1]

def bfs(x, y, graph, check):
    que = deque([(x, y)])
    while que:
        x, y = que.popleft()
        check[x][y] = True
        for i in range(len(dx)):  # range 범위 대각선도 생각하기
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < h and 0 <= ny < w and check[nx][ny] == False:
                if graph[nx][ny] == 1:
                    check[nx][ny] = True
                    que.append((nx, ny))

while 1:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break
    field = [list(map(int, input().split())) for _ in range(h)]
    visited = [[False] * w for _ in range(h)]
    island = 0

    for i in range(h):
        for j in range(w):
            if field[i][j] == 1 and visited[i][j] == False:
                bfs(i, j, field, visited)
                island += 1
    print(island)