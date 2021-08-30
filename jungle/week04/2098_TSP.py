import sys
input = sys.stdin.readline

N = int(input())  # 도시의 수
W = [list(map(int, input().split())) for _ in range(N)]
dp = [[0] * (1 << N-1) for _ in range(N)]  # 도시가 4개라면 1000(각 자리수별로 도시 표시)
'''
dp[i][j] = i에서 j로 갈 때 필요한 최소 비용
'''

def tsp(i, route):
    if dp[i][route] != 0:
        return dp[i][route]