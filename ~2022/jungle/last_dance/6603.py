# https://www.acmicpc.net/problem/6603

from itertools import combinations

while 1:
    lotto_num = list(map(int, input().split()))
    if lotto_num == [0]:
        exit()

    S = list(combinations(lotto_num, 6))

    for i in S:
        for j in i:
            print(j, end=' ')
        print()
    print()