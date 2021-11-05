# https://www.acmicpc.net/problem/18405

from collections import deque

N, K = map(int, input().split())

arr = []
virus_sp = []
for i in range(N):
    arr.append(list(map(int, input().split())))
    for j in range(N):
        if arr[i][j] != 0:
            virus_sp.append([arr[i][j], i, j, 0])
virus_sp.sort()

S, X, Y = map(int, input().split())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

que = deque(virus_sp)
while que:
    virus, x, y, time = que.popleft()
    if time == S:
        break
    for i in range(4):
        nx = x + dx[i]
        ny = x + dy[i]
        if 0 <= nx <= N-1 and 0 <= ny <= N-1 and arr[nx][ny] == 0:
            arr[nx][ny] = virus
            que.append([virus, nx, ny, time+1])

print(arr[X-1][Y-1])