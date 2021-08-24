from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
time = 0

# bfs 함수 정의
def bfs(x, y, ice, ch):
    que = deque()
    que.append((x, y))
    ch[x][y] = True

    while que:
        x, y = que.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <+ ny < M:
                if ch[nx][ny] == False and ice[nx][ny] != 0:
                    ch[nx][ny] = True
                    que.append((nx,ny))

# 빙산의 녹는 경우 함수 정의
def melting(x, y, ice, ch):
    ch[x][y] = True

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < M:
            if ice[nx][ny] == 0 and ice[x][y] > 0 and ch[nx][ny] == False:
                ice[x][y] -= 1
    
    if ch[x][y] != 0:
        return 1
    else:
        return 0


N, M = map(int, input().split())
field = [list(map(int, input().split())) for _ in range(N)]

while 1:
    flag = 0

    check = [list(False for i in range(M)) for j in range(N)]
    for i in range(N):
        for j in range(M):
            if field[i][j] != 0:
                if melting(i, j, field, check):
                    flag = 1

    # 빙산이 분리되지 않는 경우
    if flag == 0:
        time = 0
        break

    check = [list(False for i in range(M)) for j in range(N)]
    count = 0

    for i in range(N):
        for j in range(M):
            if check[i][j] == False and field[i][j] != 0:
                bfs(i, j, field, check)
                count += 1

    if count >= 2:
        time += 1
        break
    else:
        time += 1

print(time)