N, M = map(int, input().split())
max_speed = int((2*N)**0.5 +1)
dp = [[float('inf')] * (max_speed+1) for _ in range(N+1)]

dp[1][0] = 0

small_stone = set()
for _ in range(M):
    small_stone.add(int(input()))

for step in range(2, N+1):
    if step in small_stone:
        continue
    for speed in range(1, max_speed):
        dp[step][speed] = min(dp[step-speed][speed-1], dp[step-speed][speed], dp[step-speed][speed+1]) + 1

if min(dp[N]) == float('inf'):
    print(-1)
else:
    print(min(dp[N]))