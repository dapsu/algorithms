N = int(input())
meeting_time = [list(map(int, input().split())) for _ in range(N)]
meeting_time.sort(key= lambda x: (x[1], x[0]))

possible_meeting = 1
end_time = meeting_time[0][1]
for i in range(1, N):
    if meeting_time[i][0] >= end_time:
        possible_meeting += 1
        end_time = meeting_time[i][1]

print(possible_meeting)