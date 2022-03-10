/** 문제
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

For example,
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

The return format is zero-based indices. 

// Template for C++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};
 */


const twoSum = (nums, target) => {
    const map = new Map();

    for (const [idx, num] of nums.entries()) {
        const tmp = target - num;
        
        if (map.get(tmp) !== undefined) return [map.get(tmp), idx];
        
        map.set(num, idx);
    }

    return;
};

// testCase
console.log(twoSum([2, 7, 11, 15], 9));


/** 문제 해설
문제를 처음 봤을 때, 이중 for문을 이용하면 가장 쉽게 해결할 수 있겠다는 생각을 했지만, 그렇게 구현하게 된다면 O(N^2)의 시간 복잡도가 되기 때문에 비효율적이다.
따라서 map객체를 이용하여 O(N)의 시간 복잡도로 해결했다.
우선 nums 배열을 키-값으로 반환하도록 entries() 메소드를 이용했다. nums는 객체가 아니기 때문에 entries()로 인해 강제로 객체로 변환이 되고, 이때 key는 0번부터 시작하게 된다.
타겟 값에서 nums의 원소를 뺀 tmp라는 변수를 정의한다. 여기서 map의 key는 nums의 num, 즉 value를 넣을 것이고, map의 value는 인덱스값인 idx로 설정할 것이다.
만약 map객체 내에 tmp가 존재한다면, 그 key의 value인 idx를 반환하고, 현재 for문에서 해당하는 원소의 idx도 같이 반환한다.
만약 map객체에 tmp가 없다면, set메소드를 이용하여 map에 키-밸류를 넣는다.
 */