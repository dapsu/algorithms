# https://www.acmicpc.net/problem/1978

n = int(input())
prime_num = list(map(int, input().split()))

prime_count = 0
for p in prime_num:
    count = 0
    if p == 1:
        continue
    for i in range(1, p+1):
        if p % i == 0:
            count += 1
    
    if count == 2:
        prime_count +=1

print(prime_count)