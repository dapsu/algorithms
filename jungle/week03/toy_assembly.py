from collections import deque

N, M = int(input()), int(input())
link = [[] for _ in range(N+1)]  # 노드별 연결 정보
matrix = [[0]*(N+1) for _ in range(N+1)]  # 가중치 입력
indegree = [0] * (N+1)  # 진입 차수 

for i in range(M):
    a, b, c = map(int, input().split())
    link[b].append((a, c))
    indegree[a] += 1
# 진입 차수가 없는 노드(기본 부품) 큐에 추가
que = deque()
for i in range(1, N+1):
    if indegree[i] == 0:
        que.append(i)

while que:
    now = que.popleft()
    # next: now를 재료로 사용하는 부품. needs: now의 개수
    for next, needs in link[now]:
        # 진입 차수 없는 노드(기본 부품)
        if matrix[now].count(0) == N+1:
            matrix[next][now] += needs
        else:
            for i in range(1, N+1):
                # 중간부품 * 중간부품 필요 개수
                matrix[next][i] += matrix[now][i] * needs
        indegree[next] -= 1
        if indegree[next] == 0:
            que.append(next)  # 진입차수 0개일시 큐에 추가

for i in enumerate(matrix[N]):
    if i[1] > 0:
        # print(*i)
        print(i[0], i[1])