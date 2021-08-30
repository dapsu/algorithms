T = int(input())

for _ in range(T):
    rank = []
    recruits = []

    N = int(input())
    for __ in range(N):
        first, second = list(map(int, input().split()))
        rank.append((first, second))
    
    rank.sort()

    tmp = rank[0][1]
    recruits.append(rank[0])
    for i in range(1, len(rank)):
        if rank[i][1] < tmp:
            recruits.append(rank[i])
            tmp = rank[i][1]

    print(len(recruits))