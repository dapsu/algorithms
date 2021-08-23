from collections import deque

N, M = map(int, input().split())
field = [list(map(int, input().split())) for _ in range(N)]
que = deque()

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

time = 0

