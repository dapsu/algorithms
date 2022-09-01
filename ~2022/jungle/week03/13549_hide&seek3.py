from collections import deque

N, K = map(int, input().split())

lim = 100001
visited = [0] * lim

que = deque([(0, N)])

while que:
    s, x = que.popleft()
    if x == K:
        print(s)
        break
    for i in (x-1, x+1, x*2):
        if 0 <= i < lim and visited[i] == 0:
            visited[i] = 1
            if i == x-1 or i == x+1:
                que.append((s+1, i))
            if i == x*2:
                que.appendleft((s, i))