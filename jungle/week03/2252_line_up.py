from collections import deque

# 위상정렬 함수 정의(queue 사용)
def topology_sort():
    # 알고리즘 수행 결과 추가
    result = []
    que = deque()

    # 인덱스 시작을 1로 설정해서 인덱스0 비활성화
    for i in range(1, N+1):
        # 처음 시작할 때 진입차수가 0인 노드를 큐에 삽입
        if indegree[i] == 0:
            que.append(i)  # 각 인덱스가 학생의 번호

    while que:
        # 큐에서 원소를 pop하면서 간선 제거하고, 간선이 없는 노드는 큐에 추가
        now = que.popleft()
        # now는 이미 간선이 없는 원소이기 때문에 result 리스트에 추가
        result.append(str(now))    # <----str으로 저장한 이유: print할 때 join()함수 사용 위해

        # 해당 원소와 연결된 노드들의 진입차수 1 빼기
        for i in graph[now]:
            indegree[i] -= 1
            # 간선이 없다면 que에 추가
            if indegree[i] == 0:
                que.append(i)
    return result

N, M = map(int, input().split())

indegree = [0] * (N+1)
graph = [[] for i in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)  
    indegree[b] += 1

print(' '.join(topology_sort()))