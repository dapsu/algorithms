# https://programmers.co.kr/learn/courses/30/lessons/81302

from collections import deque

def bfs(graph):
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    que = deque()

    visited = [[False] * 5 for _ in range(5)]
    dist = [[0] * 5 for _ in range(5)]
    
    for row in range(5):
        for col in range(5):
            if graph[row][col] == 'P':
                que.append((row, col))

    while que:
        x, y = que.popleft()
        visited[x][y] = True

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < 5 and 0 <= ny < 5 and visited[nx][ny] == False:
                if graph[nx][ny] == 'O':
                    que.append((nx, ny))
                    visited[nx][ny] = True
                    dist[nx][ny]  = dist[x][y] + 1

                if graph[nx][ny] == 'P' and dist[nx][ny] <= 1:
                    return 0
    return 1

def solution(places):
    answer = []
    
    for i in places:
        waiting_room = []
        for j in i:
            waiting_room.append(j)

        answer.append(bfs(waiting_room))
    return answer





eg1 = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
print(solution(eg1))