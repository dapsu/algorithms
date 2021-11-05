# https://programmers.co.kr/learn/courses/30/lessons/43165


def solution(numbers, target):
    result = 0

    def dfs(idx, res):
        if idx == len(numbers):
            if res == target:
                nonlocal result
                result += 1
                return
        else:
            dfs(idx+1, res+numbers[idx])
            dfs(idx+1, res-numbers[idx])

    dfs(0, 0)
    return result