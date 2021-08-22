import sys
sys.setrecursionlimit(10**8)

N = int(input())

nodes = [[] for _ in range(N+1)]  # 각 노드별 연결되어 있는 노드들 추가. 리스트의 인덱스가 노드 번호
p_node = [0] * (N+1)  # 노드의 부모 노드 표시

for _ in range(N-1):
    a, b = map(int, input().split())
    # 중복 상관없이 각 노드가 어떤 노드와 연결되어 있는지 모두 추가
    nodes[a].append(b)
    nodes[b].append(a)

def dfs(start):
    # 시작 노드와 연결된 모든 원소들 for문으로 확인
    for i in nodes[start]:
        # p_node가 0이라면 start가 i번 노드의 부모 노드
        if p_node[i] == 0:
            p_node[i] = start
            dfs(i)

dfs(1)

for i in range(2, N+1):
    print(p_node[i])