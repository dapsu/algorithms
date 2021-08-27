N = int(input())
matrix = [list(map(int, input().split())) for _ in range(N)]
# 곱셈의 최소 회수 행렬
dp = [[0]*N for _ in range(N)]

for diagonal in range(1, N):  # 0번째 인덱스는 자기 자신의 행렬이기 때문에 값이 0
    for i in range(0, N-diagonal):  # 대각선의 우측 한 칸씩 이동
        j = i + diagonal  # 현재 대각선에서 몇 번째 원소인지
        # 차이가 1밖에 나지 않는 칸
        if diagonal == 1:
            dp[i][j] = matrix[i][0] * matrix[j][0] * matrix[j][1]
            continue

        dp[i][j] = float('inf')
        # 각 부분행렬의 곱셈 횟수 + 두 행렬의 곱셈 횟수
        for k in range(i, j):  # k값으로 최적분할 찾기
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + matrix[i][0] * matrix[k][1] * matrix[j][1])

print(dp[0][N-1])  # 최종 목표