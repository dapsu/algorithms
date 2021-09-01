N, K = map(int, input().split())
dp = [[0]*(N+1) for _ in range(K+1)]

for i in range(K+1):
    for j in range(N+1):
        dp[i][0] = 1
        if i == 1:
            dp[i][j] = 1
        else:
            dp[i][j] = dp[i-1][j] + dp[i][j-1]

print(dp[K][N] % 1000000000)