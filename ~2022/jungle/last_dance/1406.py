# https://www.acmicpc.net/problem/1406

N = input()
M = int(input())
cursor = len(N)+1

str_list = []
for i in N:
    str_list.append(i)

stack = []

for i in range(M):
    inst = input().split()
    if inst[0] == 'L':
        if len(str_list) != 0:
            stack.append(str_list.pop())
    elif inst[0] == 'D':
        if len(stack) != 0:
            str_list.append(stack.pop())
    elif inst[0] == 'B':
        if len(str_list) != 0:
            str_list.pop()
    elif inst[0] == 'P':
        str_list.append(inst[1])

while stack:
    str_list.append(stack.pop())

print(''.join(str_list))