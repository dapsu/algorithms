# https://programmers.co.kr/learn/courses/30/lessons/12949

def solution(arr1, arr2):
    result = [[]*len(arr2[0]) for _ in range(len(arr1))]
    for i in range(len(arr1)):
        for j in range(len(arr2[0])):
            tmp = 0
            for k in range(len(arr2)):
                tmp += arr1[i][k]*arr2[k][j]
                # print(arr1[i][k]*arr2[k][j])
            result[i].append(tmp)

    return result


a = [[1, 4], [3, 2], [4, 1]]
b = [[3, 3], [3, 3]]
print(solution(a,b))
