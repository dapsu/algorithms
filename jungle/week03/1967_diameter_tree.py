import sys
sys.setrecursionlimit(10**8)
'''
dfs를 이용하여 임의의 노드에서 최장 길이를 가지는 노드(가장 먼 노드) 구하기
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
dfs(1, result_1)  # 임의로 노드 1에서 시작
result_1[1] = 0  # 루트 노드가 정해져 있지 않아 양방향으로 입력을 받기 때문에 0 처리
# print(result_1)

max_result = 0  # 가중지 합 가장 긴 값 가지는 노드 구하기
long_idx = 0    # 최장길이일 때 인덱스(노드)번호

for i in range(n+1):
    if max_result < result_1[i]:
        max_result = result_1[i]
        long_idx = i

# 최장 길이일 때 노드에서 다시 dfs를 통해 트리 지름 구하기
result_2 = [0] * (n+1)
dfs(long_idx, result_2)
result_2[long_idx] = 0
# print(result_2)

print(max(result_2))