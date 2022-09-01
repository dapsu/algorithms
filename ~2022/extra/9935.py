# https://www.acmicpc.net/problem/9935

'''
#######################################
eg_str = input()
bomb_str = input()

res = ''

for i in eg_str:
    if i not in bomb_str:
        res += i

if res == '':
    print("FRULA")
else:
    print(res)
#######################################

시간 초과. O(N)인 것 같은데...? 사실상 not in bomb_str 부분에서 탐색하면서 O(N^2)이 되는건가?
탐색할 때 인덱스를 이용해야 하는 듯
'''

#######################################

eg_str = input()
bomb_str = input()

stack = []

for i in eg_str:
    stack.append(i)
    if i == bomb_str[-1] and ''.join(stack[-len(bomb_str):]) == bomb_str:
        del stack[-len(bomb_str):]


result = ''.join(stack)

if result == '':
    print('FRULA')
else:
    print(result)