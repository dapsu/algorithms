# https://www.acmicpc.net/problem/14499

from collections import deque

N, M, x, y, k = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]
directions = deque([0])
directions.extend(list(map(int, input().split())))

# 주사위
dice = [0, 0, 0, 0, 0, 0, 0]

def move(dir):
    if dir == 1:
        dice[1], dice[3], dice[6], dice[4] = dice[4], dice[1], dice[3], dice[6]
    if dir == 2:
        dice[1], dice[3], dice[6], dice[4] = dice[3], dice[6], dice[4], dice[1]
    if dir == 3:
        dice[1], dice[5], dice[6], dice[2] = dice[2], dice[1], dice[5], dice[6]
    if dir == 4:
        dice[1], dice[5], dice[6], dice[2] = dice[5], dice[6], dice[2], dice[1]


while directions:
    direction = directions.popleft()
    if direction == 0:
        continue
    elif direction == 1:
        a, b = 0, 1
        dir = 1
    elif direction == 2:
        a, b = 0, -1
        dir = 2
    elif direction == 3:
        a, b = -1, 0
        dir = 3
    elif direction == 4:
        a, b = 1, 0
        dir = 4

    if 0 <= x+a < N and 0 <= y+b < M:
        x += a
        y += b
        move(dir)

        if graph[x][y] != 0:
            dice[6] = graph[x][y]
            graph[x][y] = 0
        else:
            graph[x][y] = dice[6]

        print(dice[1])