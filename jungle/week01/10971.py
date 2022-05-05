## https://www.acmicpc.net/problem/10971

from itertools import permutations

def sum_routes(x):  # x <-- 도시 개수에 따른 경우의 수 삽입
    global arr
    rt = 0
    for i in range(len(x)-1):  # -1 이유 : [i][i+1], i -> i+1 (도시간)이동 표현하기 위해
        if arr[x[i]][x[i+1]] != 0:  # i를 출발도시로 생각하면 더 이해하기 수월해짐  (0, 1) (1, 2) (2, 3)
            rt += arr[x[i]][x[i+1]]  # 0이 아니면 도시로 이동시 발생하는 비용 추가
        else:
            return -1  # 도시간 이동 불가능시 -1 return
    
    if arr[x[-1]][x[0]] == 0:
        return -1
    else:
        rt += arr[x[-1]][x[0]]  # 마지막 도시에서 출발했던 도시로 돌아오는 경우가 0이 아닐 때

    return rt


cities = int(input())

arr = [None] * cities
for i in range(cities):
    arr[i] = list(map(int, input().split()))  # 도시 이동간 발생하는 비용 행렬에 추가

perm = [i for i in range(cities)]  # 도시 개수별 경로 세팅(순열 돌릴 예정)

value = 10000001  # 각 행렬당 최대 비용 1000000 x 최대 도시 10 

for x in permutations(perm):  # 순열로 모든 경우의 수 구하기
    costs = sum_routes(x)  # 재귀 돌리면서 모든 경우의 수의 비용 구하기
    if costs != -1:
        value = min(value, costs)  # 길이 없는 경우(-1) 제외하고 최소 비용 구하기

print(value)