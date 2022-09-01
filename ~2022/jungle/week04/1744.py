N = int(input())
positive = []
negative = []
result = 0

for i in range(N):
    num = int(input())
    if num > 1:
        positive.append(num)
    elif num == 1:
        result += 1
    else:
        negative.append(num)

positive.sort(reverse=True)
negative.sort()

if len(positive) % 2 == 0:
  for i in range(1, len(positive), 2):
    result += positive[i-1] * positive[i]
else:
  for i in range(1, len(positive)-1, 2): 
    result += positive[i-1] * positive[i]
  result += positive[len(positive)-1]

if len(negative) % 2 == 0:
  for i in range(1, len(negative), 2):
    result += negative[i-1] * negative[i]
else:
  for i in range(1, len(negative)-1, 2):
    result += negative[i-1] * negative[i]
  result += negative[len(negative)-1]

print(result)