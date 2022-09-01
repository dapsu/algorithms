n = int(input())
wine_list = [int(input()) for x in range(n)]

dp = [0]
dp.append(wine_list[0])
if(n > 1):
    dp.append(wine_list[0] + wine_list[1])
print(wine_list)
print(dp)

# 연속 3잔을 마시지 않아야 하므로
# 1 : 이번 포도주를 먹고 이전 포도주를 먹지 않은 경우
# 2 : 이번 포도주를 먹고 이전 포도주도 먹은 경우
# 3 : 이번 포도주를 먹지 않아야 하는 경우
# 위 세가지 경우를 고려하여 max

for i in range(3, n + 1):
    # wine_list는 0부터 시작하므로 i - 1로 해준다.
    case_1 = wine_list[i - 1] + dp[i - 2]
    case_2 = wine_list[i - 1] + wine_list[i - 2] + dp[i - 3]
    case_3 = dp[i - 1]
    max_value = max(case_1, case_2, case_3)
    
    dp.append(max_value)
    
print(dp[n])