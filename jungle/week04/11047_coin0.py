N, K = map(int, input().split())
coin_values = [int(input()) for _ in range(N)]
coin_values.reverse()

min_value = 0  # 동전 갯수
now_value = 0  # 현재의 가치
for i in coin_values:
    if i > K:
        continue
    while 1:
        if i <= K:
            min_value += 1
            now_value += i
            if now_value > K:
                now_value -= i
                min_value -= 1
                break

print(min_value)