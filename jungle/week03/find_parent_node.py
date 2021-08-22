import sys
sys.setrecursionlimit(10**8)

N = int(input())

nodes = [[] for _ in range(N+1)]
p_node = [0 for _ in range(N+1)]

for _ in range(N-1):
    a, b = map(int, input().split())
    nodes[a].append(b)
    nodes[b].append(a)

def dfs(start):
    for i in nodes[start]:
        if p_node[i] == 0:
            p_node[i] = start
            dfs(i)

dfs(1)

for i in range(2, N+1):
    print(p_node[i])