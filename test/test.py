n, k = map(int, input().split())
coin = []
 
p = [10001 for _ in range(k + 1)]
p[0] = 0
 
for _ in range(n):
    coin.append(int(input()))
 
for i in range(n):
    for c in range(coin[i], k + 1):
        if p[c] > p[c - coin[i]] + 1:
            p[c] = p[c - coin[i]] + 1  # p[c] : c만큼의 가치를 만들기 위해 필요한 동전의 최소 개수
 
if p[k] == 10001:  # p[k]가 업데이트 되지 않았다면 주어진 동전으로 k 못 만든다는 의미
    print(-1)
else:
    print(p[k])

print(p)
print(coin)