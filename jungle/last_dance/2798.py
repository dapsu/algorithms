# https://www.acmicpc.net/problem/2798

from itertools import combinations

N, M = map(int, input().split())
card_num = list(map(int, input().split()))

result = []
for a, b, c in combinations(card_num, 3):
    if a+b+c > M:
        continue
    result.append(a+b+c)

print(max(result))