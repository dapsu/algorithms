import sys

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(graph, x, y):
    que = set([(x, y, graph[x][y])])  # == {(x, y, graph[x][y])}
    route = 1
    
    while que:
        x, y, visited = que.pop()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < R and 0 <= ny < C:
                if graph[nx][ny] not in visited:
                    new_visited = visited + graph[nx][ny]
                    que.add((nx, ny, new_visited))
                    route = max(route, len(new_visited))
    return route

R, C = map(int, sys.stdin.readline().split())
alpha = [list(sys.stdin.readline()) for _ in range(R)]

print(bfs(alpha, 0, 0))