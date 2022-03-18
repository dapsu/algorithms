// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridgeLength, weight, truckWeights) {
    let result = 0;
    const bridgeStatus = new Array(bridgeLength).fill(0);
    
    while (bridgeStatus.length > 0) {
        bridgeStatus.shift();
        result++;

        if (truckWeights.length !== 0) {
            let bridgeWeight = bridgeStatus.reduce((a, b) => a + b);

            if (bridgeWeight + truckWeights[0] <= weight) bridgeStatus.push(truckWeights.shift());
            else bridgeStatus.push(0);
        }
    }

    return result;
}


// testCase
console.log(solution(2, 10, [7,4,5,6]));        // 8
console.log(solution(100, 100, [10]));        // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]	));        // 110
