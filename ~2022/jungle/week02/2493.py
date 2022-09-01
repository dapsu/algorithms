# https://www.acmicpc.net/problem/2493

def laser_signal():
    stack = []
    receive_top = []
    for i in range(n):
        while stack:
            if stack[-1][0] < top[i]:
                stack.pop()
            else:
                receive_top.append(stack[-1][1]+1)
                stack.append([top[i], i])
                break
        if not stack:
            stack.append([top[i], i])
            receive_top.append(0)
    return receive_top


n = int(input())
top = list(map(int, input().split()))

for j in laser_signal():
    print(j, end=" ")