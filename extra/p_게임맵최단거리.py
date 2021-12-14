from collections import deque

########################### 테스트 케이스 두 개 다 통과. 근데 Fail. Why?? #######################################
# 야씨...  maps 5x5는 그냥 예시잖아...ㅠㅠ

# def solution(maps):
#     dy = [-1, 0, 1, 0]
#     dx = [0, -1, 0, 1]

#     graph = [[-1]*5 for _ in range(5)]
#     graph[0][0] = 1

#     que = deque([[0, 0]])
#     while que:
#         y, x = que.popleft()
        
#         for i in range(4):
#             ny = y + dy[i]
#             nx = x + dx[i]
#             if 0 <= nx < 5 and 0 <= ny < 5 and maps[ny][nx] == 1 and graph[ny][nx] == -1:
#                 que.append([ny, nx])
#                 graph[ny][nx] = graph[y][x] + 1
#     return graph[-1][-1]

# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
# print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))

####################################### 재도전 ##########################################################

def solution(maps):
    dy = [-1, 0, 1, 0]
    dx = [0, -1, 0, 1]

    n = len(maps[0])
    m = len(maps)

    graph = [[-1]*n for _ in range(m)]
    graph[0][0] = 1


    que = deque([[0, 0]])
    while que:
        y, x = que.popleft()
        
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if 0 <= nx < n and 0 <= ny < m and maps[ny][nx] == 1 and graph[ny][nx] == -1:
                que.append([ny, nx])
                graph[ny][nx] = graph[y][x] + 1
    return graph[-1][-1]

    
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))