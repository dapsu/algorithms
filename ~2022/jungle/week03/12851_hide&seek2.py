from collections import deque

N, K = map(int, input().split())

lim = 100001
visited = [[-1, 0] for _ in range(lim)]  # [가장 빠른 시간, 방법의 수]

que = deque([N])
visited[N][0] = 0
visited[N][1] = 1

while que:
    x = que.popleft()
    for i in (x-1, x+1, x*2):
        if 0 <= i < lim:
            # 처음 들르는 경우
            if visited[i][0] == -1:
                visited[i][0] = visited[x][0] + 1
                visited[i][1] = visited[x][1]
                que.append(i)
            # 한 번 이상 들르는 경우
            elif visited[i][0] == visited[x][0] + 1:
                visited[i][1] += visited[x][1]  # 큐 추가 없이 방법만 +1

print(visited[K][0])
print(visited[K][1])