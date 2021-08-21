from collections import deque

# 방향 이동
dx = [-1, 1, 0, 0]  # <-- -1: 좌, 1: 우
dy = [0, 0, -1, 1]  # <-- -1: 상, 1: 하

# bfs 함수 정의(노드간 최단경로를 구해야 하기 때문에 bfs 사용)
def bfs(graph, x, y):
    que = deque()
    que.append((x, y))
    #  첫 번째 좌표 방문 처리
    visited[x][y] = 1
    while que:
        x, y = que.popleft()
        # 인덱스 고려하여 N, M에 -1 처리
        if x == N-1 and y == M-1:
            break
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 좌표가 미로 사각형 밖을 벗어나지 않게 하려고 범위 설정
            if 0 <= nx < N and 0 <= ny < M:
                # 방문되지 않은 곳과 이동할 수 있는 좌표인 경우 if문 실행
                if visited[nx][ny] != 1 and graph[nx][ny] == 1:
                    que.append((nx, ny))
                    # 방문할 때 얼마나 이동했는지 구현하기 위한 처리
                    visited[nx][ny] = visited[x][y] + 1
    return visited[x][y]


N, M = map(int, input().split())
maze = [list(map(int, input())) for _ in range(N)]
visited = [[0]*M for _ in range(N)]

print(bfs(maze, 0, 0))