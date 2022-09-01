def pos(num, left, right, hand):
    kp = {
        1:(0,0), 2:(0,1), 3:(0,2),
        4:(1,0), 5:(1,1), 6:(1,2),
        7:(2,0), 8:(2,1), 9:(2,2),
        '*':(3,0), 0:(3,1), '#':(3,2)
    }

    dist_left = abs(kp[num][0] - kp[left][0]) + abs(kp[num][1] - kp[left][1])
    dist_right = abs(kp[num][0] - kp[right][0]) + abs(kp[num][1] - kp[right][1])

    if dist_left < dist_right:
        return 'L'
    elif dist_left > dist_right:
        return 'R'
    else:
        if hand == 'right':
            return 'R'
        else:
            return 'L'


def solution(nums, hand):
    result = ''
    left = '*'
    right = '#'

    for num in nums:
        if num in [1, 4, 7]:
            result += 'L'
            left = num
        elif num in [3, 6, 9]:
            result += 'R'
            right = num
        else:
            mid = pos(num, left, right, hand)
            result += mid
            if mid == 'R':
                right = num
            else:
                left = num
            
    return result