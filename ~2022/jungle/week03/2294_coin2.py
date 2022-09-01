n, k = map(int, input().split())
coins = list(int(input()) for _ in range(n))

val = [100001 for _ in range(k+1)]
val[0] = 0

for i in range(n):
    for coin in range(coins[i], k+1):
        # val[c] : c만큼의 가치를 만들기 위해 필요한 동전의 최소 개수
        if val[coin] > val[coin - coins[i]] + 1:
            val[coin] = val[coin - coins[i]] + 1

# val[k]가 업데이트 되지 않았다면 주어진 동전으로 k 못 만든다는 의미
if val[k] == 100001:
    print(-1)
else:
    print(val[k])