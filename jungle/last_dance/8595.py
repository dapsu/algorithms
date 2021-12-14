# https://www.acmicpc.net/problem/8595

import sys

n = int(sys.stdin.readline())
words = sys.stdin.readline()

num = '1234567890'
hidden_num = ''

for i in range(n):
    if words[i] in num:
        hidden_num += words[i]
    else:
        hidden_num += ' '


result = list(map(int, hidden_num.split()))
print(sum(result))