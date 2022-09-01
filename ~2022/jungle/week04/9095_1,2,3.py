def one_two_three(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n == 3:
        return 4
    else:
        sum_nums = one_two_three(n-1) + one_two_three(n-2) + one_two_three(n-3)
        return sum_nums

T = int(input())
for _ in range(T):
    num = int(input())
    print(one_two_three(num))