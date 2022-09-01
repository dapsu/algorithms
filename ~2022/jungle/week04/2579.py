import sys


def 계단오르기():
    # inputs
    N = int(sys.stdin.readline())
    stairs = [0] * (N+1)
    for i in range(1, N+1):
        stairs[i] = int(sys.stdin.readline())

    table = [0] * (N+1)
    try:
        # base cases
        table[0] = 0
        table[1] = stairs[1]
        table[2] = stairs[1] + stairs[2]

        for i in range(3, N+1):
            table[i] = max(table[i-2], table[i-3] + stairs[i-1]) + stairs[i]
    except:
        pass

    print(table[N])