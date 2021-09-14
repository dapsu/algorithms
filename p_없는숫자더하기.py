def solution(numbers):
    num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for i in numbers:
        if i in num_list:
            num_list.remove(i)
            continue
    
    result = sum(num_list)

    return result