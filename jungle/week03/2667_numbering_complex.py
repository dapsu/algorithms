from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

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

complex = [[0] * (N) for _ in range(N)]
complex_nums = 0
houses_list = []

for i in range(N):
    for j in range(N):
        if complex[i][j] == 0 and field[i][j] != 0:
            houses = bfs(i, j, field, complex)
            houses_list.append(houses)
            complex_nums += 1

houses_list.sort()

print(complex_nums)
for i in houses_list:
    print(i)