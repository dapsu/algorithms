# https://www.acmicpc.net/problem/1303

from collections import deque

# 전쟁터 맵 2차원 배열 추가
N, M = map(int, input().split())
battle_map = []
for _ in range(M):
    tmp = []
    for i in input():
        tmp.append(i)
    battle_map.append(tmp)

# 방문 표시 위한 배열
visited = [[False]*N for _ in range(M)]

# 방향 표시
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# bfs 함수
def bfs(x, y, graph, check):
    que = deque()
    que.append([x, y])
    check[x][y] = True
    num = 1
    while que:
        x, y = que.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < M and 0 <= ny < N and graph[nx][ny] == graph[x][y] and check[nx][ny] == False:
                check[nx][ny] = True
                que.append([nx, ny])
                num += 1
    return num

W_sum = B_sum = 0
for i in range(M):
    for j in range(N):
        if visited[i][j] == False:
            if battle_map[i][j] == 'W':
                tmp = bfs(i, j, battle_map, visited)
                W_sum += tmp**2
            else:
                tmp = bfs(i, j, battle_map, visited)
                B_sum += tmp**2

print(W_sum, B_sum)