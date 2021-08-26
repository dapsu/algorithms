import sys
sys.setrecursionlimit(10**8)
'''
dfs를 이용하여 루트노드 ~ 리프노드의 가중치 합이 최장 길이인 노드 구하기
그 후, 그 노드에서 가장 긴 길이 구하기
'''
n = int(input())
matrix = [[] for _ in range(n+1)]
for i in range(n-1):
    p_v, c_v, weight = map(int, input().split())
    matrix[p_v].append([c_v, weight])
    matrix[c_v].append([p_v, weight])

def dfs(start, result):
    for v, w in matrix[start]:
        if result[v] == 0:
            result[v] = result[start] + w
            dfs(v, result)

result_1 = [0] * (n+1)
dfs(1, result_1)
# print(result_1)

max_result = 0  # 가중지 합 가장 긴 값 가지는 노드 구하기
long_idx = 0    # 최장길이일 때 인덱스(노드)번호

for i in range(n+1):
    if max_result < result_1[i]:
        max_result = result_1[i]
        long_idx = i

result_2 = [0] * (n+1)
dfs(long_idx, result_2)
# print(result_2)

print(max(result_2))