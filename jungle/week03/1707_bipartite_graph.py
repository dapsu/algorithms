import sys
sys.setrecursionlimit(10**8)
input = sys.stdin.readline

def dfs(v,  group):  
    visited[v] = group  # 방문한 노드에 group 할당
    for i in conn[v]:
        if visited[i] == 0:  # 아직 방문한 곳 아니면 방문
            if not dfs(i, -group):
                return False
        elif visited[i] == visited[v]:  # 방문한 곳이 동일 그룹이면 false
            return False
    return True


K = int(input())
for _ in range(K):
    V, E = map(int, input().split())
    conn = [[] for _ in range(V+1)]
    visited = [0] * (V+1)

    for __ in range(E):
        a, b = map(int, input().split())
        conn[a].append(b)
        conn[b].append(a)

    for i in range(1, V+1):  # 그룹은 1, -1 두 개로 분할해서 탐색
        if visited[i] == 0:
            b_graph = dfs(i, 1)
            if not b_graph:
                break

    if b_graph:
        print('YES')
    else:
        print('NO')