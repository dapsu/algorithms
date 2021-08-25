from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# bfs 함수 정의: 단지 내 집의 개수 리턴
def bfs(x,y, graph, check):
    que = deque()
    que.append((x, y))
    house_nums = 1
    while que:
        x, y = que.popleft()
        check[x][y] = 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and check[nx][ny] == 0 and graph[nx][ny] != 0:
                check[nx][ny] = 1
                house_nums += 1
                que.append((nx,ny))
    return house_nums


N = int(input())
field = [list(map(int, input())) for _ in range(N)]

# 단지 방문 여부 표시
complex = [[0] * (N) for _ in range(N)]
# 단지 개수
complex_nums = 0
# 단지 내 집의 개수 구하기 위한 리스트
houses_list = []

for i in range(N):
    for j in range(N):
        if complex[i][j] == 0 and field[i][j] != 0:
            houses = bfs(i, j, field, complex)
            houses_list.append(houses)  # 단지 내 집 개수 리스트에 추가
            complex_nums += 1  # 단지 개수 추가

# 집의 수 오름차순으로 정렬
houses_list.sort()

print(complex_nums)
for i in houses_list:
    print(i)