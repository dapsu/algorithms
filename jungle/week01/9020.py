# https://www.acmicpc.net/problem/9020

def prime_num(n):
    if n == 1:
        False
    for i in range(2, n):
        if n % i == 0:
            False
    return True

for n in range(t=int(input())):
    n = int(input())
    f = b = n //2
    
    for i in range(n):
        if prime_num(f) and prime_num(b):
            print(f, b)
            break
        f -= 1
        b += 1