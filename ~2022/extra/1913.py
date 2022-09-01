# https://www.acmicpc.net/problem/1913

N = int(input())
M = int(input())

arr = [[0]*N for _ in range(N)]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

now_x = now_y = d = 0
now_num = N*N

while(now_num > 0): 
    arr[now_y][now_x] = now_num 
    if (now_x + dx[d] < 0 or now_x + dx[d] >= N or now_y + dy[d] < 0 or now_y + dy[d] >= N or
       arr[now_y + dy[d]][now_x + dx[d]] != 0):
       d = (d+1)%4

    now_x = now_x + dx[d]
    now_y = now_y + dy[d]
    now_num -= 1

pos_x = pos_y = 0

for i in range(N):
    for j in range(N):
        if arr[i][j] == M:
            pos_x = j
            pos_y = i
        print(arr[i][j], end= ' ')
    print()

print(pos_y+1, pos_x+1)