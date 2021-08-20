from collections import defaultdict

# DFS 함수 정의
def dfs(graph, v, visited):
    # 현재 노드 방문 처리
    visited[v] = True
    # 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)
    # 1번은 제외되어야 하기 때문에 -1
    return visited.count(True) - 1


N = int(input())
M = int(input())

# collections 모듈의 defaultdict 함수를 이용하여 딕셔너리의 value를 리스트로 default
graph = defaultdict(list)

# Key = 컴퓨터 번호, Value = Key 컴퓨터와 연결된 컴퓨터들
for _ in range(M):
    a, b = map(int, input().split())
    # defaultdict로 value가 리스트로 되어있기 때문에 append()를 통해 원소 추가
    graph[a].append(b)
    graph[b].append(a)

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(False: 미방문, True: 방문)
visited = [False] * (N+1)

print(dfs(graph, 1, visited))