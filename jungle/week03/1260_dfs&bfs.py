from collections import deque, defaultdict

# 함수 정의
def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    for i in graph[v]:
        if not visited[i]:
            visited[i] = True
            dfs(graph, i, visited)

def bfs(graph, start, visited):
    que = deque([start])
    visited[start] = True
    while que:
        v = que.popleft()
        print(v, end=' ')
        for i in graph[v]:
            if not visited[i]:
                que.append(i)
                visited[i] = True

N, M, V = map(int, input().split())

# collections 모듈의 defaultdict 함수를 이용하여 딕셔너리의 value를 리스트로 default
graph = defaultdict(list)

# Key = 컴퓨터 번호, Value = Key 컴퓨터와 연결된 컴퓨터들
for _ in range(M):
    a, b = map(int, input().split())
    # defaultdict로 value가 리스트로 되어있기 때문에 append()를 통해 원소 추가
    graph[a].append(b)
    graph[b].append(a)

# 작은 것부터 탐색해야 하므로 때문에 graph의 value 내 원소들 오름차순으로 정렬
for i in graph.keys():
    graph[i] = sorted(set(graph[i]))

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(False: 미방문, True: 방문)
visited = [False] * (N + 1)
dfs(graph, V, visited)
print()
# bfs 탐색 위해 visited 초기화
visited = [False] * (N + 1)
bfs(graph, V, visited)