import sys

sys.setrecursionlimit(100000)

n = int(input())
area = [list(map(int, input().split())) for _ in range(n)]
max_num = 0

def dfs(x, y, h):
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if (0 <= nx < n) and (0 <= ny < n):
            if area[nx][ny] > h and visited[nx][ny] == False:
                visited[nx][ny] = True
                dfs(nx, ny, h)

for k in range(max(map(max, area))):  
    count = 0
    visited = [[False]*n for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            if area[i][j] > k and visited[i][j] == False:
                count += 1
                dfs(i, j, k)
    max_num = max(max_num, count)

print(max_num)