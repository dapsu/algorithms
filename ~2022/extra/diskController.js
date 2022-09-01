// https://programmers.co.kr/learn/courses/30/lessons/42627

const solution = (jobs) => {
    let [currentTime, totalTime] = [0, 0];
    const priorityQueue = [];

    const getTime = () => {
        const [arrivalTime, burstTime] = priorityQueue.shift();
        totalTime += currentTime - arrivalTime + burstTime;
        currentTime += burstTime;
    }

    jobs.sort((a, b) => a[0] - b[0])
        .forEach(([arrivalTime, burstTime]) => {
            while (currentTime < arrivalTime) {
                if (!priorityQueue.length) {
                    currentTime = arrivalTime;
                }
                else {
                    getTime();
                }
            }
            priorityQueue.push([arrivalTime, burstTime]);
            priorityQueue.sort((a, b) => a[1] - b[1]);
            
        });
        
        while (priorityQueue.length > 0) {
            getTime();
        }

    return Math.floor(totalTime / jobs.length);
};


// testCase
console.log(solution([[0, 3], [1, 9], [2, 6]]));    // 9
console.log(solution([[0, 10], [2, 12], [9, 19], [15, 17]]));    // 25
console.log(solution([[100, 100], [1000, 1000]]));    // 550