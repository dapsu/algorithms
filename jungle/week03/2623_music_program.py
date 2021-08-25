from collections import deque

N, M = map(int, input().split())

line_up = [[] for _ in range(N+1)]
# 진입차수 표시 위한 리스트
indegree = [0] * (N+1)

for _ in range(M):
    buff = list(map(int, input().split()))
    # 불필요한 인덱스 0번 제거
    del buff[0]
    for i in range(1, len(buff)):
        a, b = buff[i-1], buff[i]
        line_up[b].append(a)  # 해당 노드보다 앞에 있는 노드 추가
        indegree[a] += 1      # 진입 차수 생기는 노드

que = deque()
result = []

for i in range(1, N+1):
    if indegree[i] == 0:
        que.append(i)

while que:
    now = que.popleft()
    result.append(now)
    for i in line_up[now]:
        indegree[i] -= 1
        if indegree[i] == 0:
            que.append(i)

result.reverse()  # 배열 뒤집기

if len(result) == N:
    for i in result:
        print(i)
else:
    print(0)