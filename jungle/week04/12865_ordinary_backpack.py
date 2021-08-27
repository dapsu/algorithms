N, K = map(int, input().split())
bag = [[0,0]]
bag.extend(list(map(int, input().split())) for _ in range(N))
dp = [[0]*(K+1) for _ in range(N+1)]

for i in range(N+1):
    for j in range(K+1):
        if bag[i][0] <= j:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-bag[i][0]]+bag[i][1])
        else:
            dp[i][j] = dp[i-1][j]

print(dp[N][K])