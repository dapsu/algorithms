from itertools import permutations

N = int(input())
A = list(map(int, input().split(' ')))
result = []

for i in permutations(A, N):
  tmp_value = 0
  for j in range(1, len(A)):
    tmp_value += abs(i[j-1] - i[j])
  result.append(tmp_value)

print(max(result))