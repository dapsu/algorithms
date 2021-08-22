from collections import deque

R, C = map(int, input().split())
matrix = [list(input()) for _ in range(R)]
visited = [[False]*C for _ in range(R)]
water = deque()
sony = deque()

for i in range(R):
    for j in range(C):
        if matrix[i][j] == 'S':
            sony.append((i, j))
            visited[i][j] = True
        elif matrix[i][j] == '*':
            water.append((i, j))
            visited[i][j] = True
        elif matrix[i][j] == 'X':
            visited[i][j] = True

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

count = 0

while sony:
    for _ in range(len(water)):
        x, y = water.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < R and 0 <= ny < C:
                if matrix[nx][ny] == '.':
                    matrix[nx][ny] = '*'
                    visited[nx][ny] = True
                    water.append((nx, ny))

    count += 1

    for _ in range(len(sony)):
        x, y = sony.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < R and 0 <= ny < C and visited[nx][ny] == False:
                if matrix[nx][ny] == '.':
                    sony.append((nx, ny))
                    visited[nx][ny] = True
                elif matrix[nx][ny] == 'D':
                    print(count)
                    exit()
print('KAKTUS')