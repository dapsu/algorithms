calc = input().split('-')

sum_list = []
for i in calc:
    num = i.split('+')
    sum_list.extend(num)

sum_num = 0
for i in sum_list:
    i = int(i)
    sum_num += i

target_list = calc[0].split('+')
target_num = 0
for i in target_list:
    i = int(i)
    target_num += i

result = target_num*2 - sum_num
print(result)