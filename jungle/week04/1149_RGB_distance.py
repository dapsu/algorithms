N = int(input())
RGB = [list(map(int, input().split()))for _ in range(N)]
dp = [[0]*3 for _ in range(N)]

dp[0] = RGB[0]
for i in range(1, N):
    dp[i][0] = RGB[i][0] + min(dp[i-1][1], dp[i-1][2])
    dp[i][1] = RGB[i][1] + min(dp[i-1][0], dp[i-1][2])
    dp[i][2] = RGB[i][2] + min(dp[i-1][0], dp[i-1][1])

print(min(min(dp[N-1][0], dp[N-1][1]), dp[N-1][2]))