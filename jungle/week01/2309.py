# https://www.acmicpc.net/problem/2309

from itertools import permutations

arr = [int(input()) for _ in range(9)]
arr.sort()

for i in permutations(arr, 7):
    if sum(i) == 100:
        for j in i:
            print(j)
        break