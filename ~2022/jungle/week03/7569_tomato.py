from collections import deque

M, N, H = map(int, input().split())
box = []
tomato = deque([])
day = 0

# 입력값이 3차원 구분이 되어있지 않기 때문에 H를 기준으로 리스트 작성
for i in range(H):
    tmp = []
    for j in range(N):
        tmp.append(list(map(int, input().split())))
        for k in range(M):
            # tmp에 추가된 리스트의 원소 중 1이면 큐(tomato)에 추가
            if tmp[j][k] == 1:
                tomato.append([i, j, k])
    # 2차원 배열인 tmp를 box에 추가하면서 3차원 배열 만들기
    box.append(tmp)

# 3차원 방향 설정
dx = [-1, 1, 0, 0, 0, 0]
dy = [0, 0, -1, 1, 0, 0]
dz = [0, 0, 0, 0, -1, 1]

while tomato:
    x, y, z = tomato.popleft()
    for i in range(6):
        nx = x + dx[i]
        ny = y + dy[i]
        nz = z + dz[i]
        if 0 <= nx < H and 0 <= ny < N and 0 <= nz < M and box[nx][ny][nz] == 0:
            # 비교한 토마토에 기존 토마토 + 1 --> 하루 지나는 것 구현
            box[nx][ny][nz] = box[x][y][z] + 1
            tomato.append([nx, ny, nz])

for i in box:
    for j in i:
        for k in j:
            # 큐로 while문을 돌렸음에도 0이 있다면 토마토가 익지 못 하는 상황
            if k == 0:
                print(-1)
                exit()
        day = max(day, max(j))

# 처음부터 익은 토마토가 존재하고, 따라서 시작점이 1이기 때문에 day -1
print(day-1)