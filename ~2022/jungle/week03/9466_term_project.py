from collections import deque

for _ in range(int(input())):
    n = int(input())
    arr = [0]
    arr.extend(list(map(int, input().split())))
    students = [[] for _ in range(n+1)]
    indegree = [0] * (n+1)

    for a, b in enumerate(arr):
        if a != 0:
            students[a].append(b)

    for i in arr:
        if i > 0:
            indegree[i] += 1

    que = deque()
    no_cycle = []

    for i in range(1, n+1):
        if indegree[i] == 0:
            que.append(i)

    while que:
        now = que.popleft()
        no_cycle.append(now)

        for i in students[now]:
            indegree[i] -= 1
            if indegree[i] == 0:
                que.append(i)

    print(len(no_cycle))