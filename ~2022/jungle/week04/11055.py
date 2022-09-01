N = int(input())
A = list(map(int, input().split()))
dp = [0] * N

dp[0] = A[0]
for i in range(1, N):
    for j in range(i):
        if A[i] > A[j]:
            dp[i] = max(A[i] + dp[j], dp[i])

print(max(dp))