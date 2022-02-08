function solution(N, stages) {
    const result = [];
    
    for (let i = 1; i <= N; i++) {
        let failRatio = stages.filter(s => s >= i).filter(s => s <= i).length / stages.filter(s => s >= i).length;
        result.push({stage: i, ratio: failRatio});
    }
    
    result.sort((a, b) => b.ratio - a.ratio);
    
    return result.map(a => a.stage);
}


// testCase
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))      // 	[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4]))                  // 	[4,1,2,3]