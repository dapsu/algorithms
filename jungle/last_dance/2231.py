# https://www.acmicpc.net/problem/2231

N = int(input())
result = 0
for i in range(N):
    tmp = [i]
    for j in str(i):
        tmp.append(int(j))
    tmp_sum = sum(tmp)
    if tmp_sum == N:
        result = i
        break

print(result)