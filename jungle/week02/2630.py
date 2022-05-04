## https://www.acmicpc.net/problem/2630 - 색종이 만들기

n = int(input())
paper = [list(map(int, input().split())) for _ in range(n)]

result = []

def recur_paper(x, y, n):
    same_all = paper[x][y]
    for i in range(x, x+n):  # 좌표별로 start, stop 인자 바뀌기 때문에
        for j in range(y, y+n):
            if paper[i][j] != same_all:
                recur_paper(x, y, n//2)
                recur_paper(x, y+n//2, n//2)
                recur_paper(x+n//2, y, n//2)
                recur_paper(x+n//2, y+n//2, n//2)
                return  ## return하지 않으면 메모리 초과
    if same_all == 0:
        result.append(0)
    else:
        result.append(1)

recur_paper(0, 0, n)
print(result.count(0))
print(result.count(1))