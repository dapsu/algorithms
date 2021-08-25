from collections import deque
import sys
input = sys.stdin.readline

# 입력 n: 가수 수 m:보조 pd 수
n, m = map(int, input().split())

# 앞 원소에서 뒷 원소를 향하는 간선들 / 진출 방향
routes = []
for _ in range(m):
    m_countdown = list(map(int, input().split()))
    m_countdown[0]
    for i in range(1, m_countdown[0]):
        a = m_countdown[i]
        b = m_countdown[i+1]
        routes.append([a, b])

# 각 노드들이 가리키고 있는 노드들(후순위에 있는 점들)
nodes = [[] for _ in range(n + 1)]
# 노드들의 진입차수
cnt = [0] * (n + 1)

# 후순위 노드들을 담고, 진입차수를 늘려준다.
for route in routes:
    a, b = route
    nodes[a].append(b)
    cnt[b] += 1

# 스택 이용/ 진입차수가 0인 것들 부터
# stack = [1, 4, 6]
stack = deque([])
for i in range(1, len(cnt)):
    if cnt[i] == 0:
        stack.append(int(i))

answer = []
# 위상 정렬
while stack:
    target = stack.pop()
    answer.append(target)

    for node in nodes[target]:
        cnt[node] -= 1
        if cnt[node] == 0:
            stack.append(node)

if len(answer) == n:
    for i in range(len(answer)):
        print(answer[i])
else:
    print(0)
