# https://www.acmicpc.net/problem/11816

X = input()
result = 0

if X[0] == '0':
    if X[1] == 'x':
        result = int(X, 16)
    else:
        result = int(X, 8)
else:
    result = int(X)

print(result)