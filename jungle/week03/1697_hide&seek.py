from collections import deque

N, K = map(int, input().split())

lim = 100001
dist = [0] * lim  # 이동하는 거리 표시

que = deque([N])

while que:
    x = que.popleft()
    if x == K:
        print(dist[x])
        break
    for nx in (x-1, x+1, x*2):  # nx = 4, 6, 10
        if 0 <= nx < lim and dist[nx] == 0:
            dist[nx] = dist[x] + 1
            que.append(nx)