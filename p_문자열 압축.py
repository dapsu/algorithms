# https://programmers.co.kr/learn/courses/30/lessons/60057

def solution(s):
    result = []
    strings = ''
    
    if len(s) == 1:
        return 1
    
    for i in range(1, len(s)//2+1):
        count = 1
        temp = s[:i]
        for j in range(i, len(s), i):
            if s[j:j+i] == temp:
                count += 1
            else:
                if count == 1:
                    count = ''
                strings += str(count)+temp
                count = 1
                temp = s[j:j+i]
        
        if count == 1:
            count = ''
        strings += str(count)+temp
        result.append(len(strings))
        strings = ''

    return min(result)