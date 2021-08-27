str1, str2 = input(), input()

len1 = len(str1)+1
len2 = len(str2)+1

matrix = [[0] * len2 for _ in range(len1)]

for i in range(1, len1):
    for j in range(1, len2):
        if str1[i-1] == str2[j-1]:
            matrix[i][j] = matrix[i-1][j-1] + 1
        else:
            matrix[i][j] = max(matrix[i-1][j], matrix[i][j-1])
            '''
            matrix[i][j] = matrix[i-1][j-1]를 그대로 가져오면 LCS의 길이를 손해볼 수 있음
            [예시] ACB, ABA
            LCS는 AB. 위의 식 그대로 하게 되면 LCS는 A가 됨
            따라서 마지막 글자가 따로 한 글자씩 추가될 때 matrix[i-1][j], matrix[i][j-1] 중 큰 값을 가져와야 함
            '''
print(matrix[-1][-1])