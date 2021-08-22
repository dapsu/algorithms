from collections import deque

R, C = map(int, input().split())

graph = [list(input()) for _ in range(R)]
# 좌표 위에 뭔가 있으면 True로 방문 처리
visited = [[False] * C for _ in range(R)]

sony = deque()  # 고슴도치
water = deque()  # 물
count = 0  # 시간(초) 카운트

# 방향 설정
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 물, 고슴도치 좌표 추가. 방문 True로 설정
for i in range(R):
    for j in range(C):
        if graph[i][j] == '*':
            water.append((i, j))
            visited[i][j] = True
        elif graph[i][j] == 'S':
            sony.append((i, j))
            visited[i][j] = True
        elif graph[i][j] == 'X':
            visited[i][j] = True

# 고슴도치 이동가능할때마다 반복문
while sony:
    # 물 현황 구현
    water_loop = len(water)
    for i in range(water_loop):
        w_x, w_y = water.popleft()
        for j in range(4):
            nx = w_x + dx[j]
            ny = w_y + dy[j]
            # if 0 <= nx < R and 0 <= ny < C and graph[nx][ny] != 'D' and visited[nx][ny] != True:
            if 0 <= nx < R and 0 <= ny < C:
                if graph[nx][ny] == '.':
                    water.append((nx, ny))
                    graph[nx][ny] = '*'
                    visited[nx][ny] = True

    # 물 확장시 시간 추가. 고슴도치는 물이 찰 예정 칸으로 이동할 수 없기 때문에 고슴도치 구현보다 먼저 카운트
    count += 1

    # 고슴도치 움직이는 로직 구현
    sony_loop = len(sony)
    for _ in range(sony_loop):
        s_x, s_y = sony.popleft()
        for i in range(4):
            nx = s_x + dx[i]
            ny = s_y + dy[i]
            if 0 <= nx < R and 0 <= ny < C:
                if graph[nx][ny] =='.' and visited[nx][ny] == False:
                    sony.append((nx, ny))
                    visited[nx][ny] = True
                elif graph[nx][ny] == 'D':
                    print(count)
                    exit()

print('KAKTUS')