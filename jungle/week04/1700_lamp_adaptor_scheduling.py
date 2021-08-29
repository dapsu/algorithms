N, K = map(int, input().split())
scheduling = list(map(int, input().split()))

adaptor = [0] * N
count = 0

for i in scheduling:
    if i in adaptor:
        pass
    elif 0 in adaptor:
        adaptor[adaptor.index(0)] = i
    else:  # 멀티탭에 빈자리 없고 현재 꽃혀 있는 전기용품들과 다를 때
        pass
