# https://www.acmicpc.net/problem/2805

N, M = map(int, input().split())

trees = list(map(int, input().split()))

bottom = 1
top = max(trees)

while bottom <= top:
    mid = (bottom + top) // 2
    get_tree = 0

    for tree in trees:
        if tree > mid:
            get_tree += tree - mid
    
    if get_tree >= M:
        bottom = mid +1
    else:
        top = mid -1
    
print(top)