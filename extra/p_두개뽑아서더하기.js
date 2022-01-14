function solution(nums) {
    const result = [];

    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (result.includes(nums[i]+nums[j])) {
                continue;
            }
            result.push(nums[i]+nums[j]);
        }
    }

    result.sort((a, b) => {
        return a - b;
      });

    return result;
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));