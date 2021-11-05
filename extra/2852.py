# https://www.acmicpc.net/problem/2852

import time

memo_cnt = int(input())
team = (1, 2)
score = [0, 0]
team_1 = team_2 = team_1_ad = team_2_ad = memo_list = []

for i in range(memo_cnt):
    tmp = list(map(int, input().replace(':', ' ').split()))
    if tmp[0] == 1:
        team_1.append(tmp)
    elif tmp[0] == 2:
        team_2.append(tmp)
    memo_list.append(tmp)

for memo in memo_list:
    if memo in team_1:
        score[0] += 1

    elif memo in team_2:
        score[1] += 1

print(memo_list)
print(team_1)
print(team_2)