N = int(input())
matrix = [list(map(int, input().split())) for _ in range(N)]
dp = [[0]*N for _ in range(N)]

for i in range(1, N):
    for j in range(0, N -i):  # 대각선 기준으로 우측만 사용
        if i == 1:  # 차이가 1밖에 나지 않는 칸
            dp[j][j+i] = matrix[j][0] * matrix[j][1] * matrix[j+i][1]
            continue

        dp[j][j+i] = 2**32  # 최댓값으로 기준
        for k in range(j, j+i):
            dp[j][j+i] = min(dp[j][j+i], dp[j][k] + dp[k+1][j+i] + matrix[j][0] * matrix[k][1] * matrix[j+i][1])

print(dp[0][N-1])