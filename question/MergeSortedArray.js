/** 문제
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

// Template for C++
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        
    }
};
 */


const mergeArr = (nums1, nums2) => {
    nums1.push(...nums2);

    return nums1.sort((a, b) => a - b);
}

// testCase
console.log(mergeArr([1,2,3], [4,5,6]));
console.log(mergeArr([54,1,767, 34], [8, 4, 11, 3]));


/** 문제 해설
이 문제는 정수로 된 배열 두 개를 하나로 합친 뒤 정렬하여 반환하는 문제다.
두 배열 중 첫 번째 배열인 nums1에 nums2 배열을 전개 연산자를 통해 안의 원소만 추가한다.
그 후 합쳐진 nums1 배열을 오름차순으로 정렬하여 반환한다.
 */