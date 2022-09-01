N = int(input())
input_alpha = []
alpha_dict = {}

for _ in range(N):
    input_alpha.append(list(input()))

for i in range(N):
    for j in range(len(input_alpha[i])):
        if input_alpha[i][j] in alpha_dict:
            alpha_dict[input_alpha[i][j]] += 10**(len(input_alpha[i]) -1 -j)
        else:
            alpha_dict[input_alpha[i][j]] = 10**(len(input_alpha[i]) -1 -j)

digits = []
for i in alpha_dict.values():
    digits.append(i)
digits.sort(reverse=True)

nums = 9
result = 0
for i in digits:
    result += i * nums
    nums -= 1

print(result)