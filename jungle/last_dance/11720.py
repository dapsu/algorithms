# https://www.acmicpc.net/problem/11720

N = int(input())
num = input()
result = 0

for i in range(N):
    add_num = int(num[i])
    result += add_num

print(result)