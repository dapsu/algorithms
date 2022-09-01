# https://programmers.co.kr/learn/courses/30/lessons/42586

from collections import deque

def solution(progresses, speeds):
    result = []
    done_cnt = 0

    operating_que = deque()
    for i in range(len(progresses)):
        operating_que.append([progresses[i], speeds[i]])

    while operating_que:
        for i in range(len(operating_que)):
            operating_que[i][0] += operating_que[i][1]

        for j in range(len(operating_que)):
            if operating_que[j][0] >= 100:
                done_cnt += 1
            else:
                break

        if done_cnt != 0:
            result.append(done_cnt)
            for _ in range(done_cnt):
                operating_que.popleft()
                done_cnt -= 1
                if done_cnt == 0:
                    break
                        
        done_cnt = 0

    return result