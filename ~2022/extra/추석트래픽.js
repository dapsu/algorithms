// https://programmers.co.kr/learn/courses/30/lessons/17676

const solution = (lines) => {
    let result = 0;
    const times = [];

    for (const line of lines) {
        const [date, time, pass] = line.split(' ');
        const [hour, minute, second] = time.split(':');
        const endTime = (Number(second) + Number(minute)*60 + Number(hour)*3600)*1000;
        const startTime = endTime - Number(pass.substring(0, pass.length-1))* 1000 + 1;
        times.push(['START', startTime]);
        times.push(['END', endTime+1000]);
    }

    times.sort((a, b) => {
        if (a[1] - b[1] < 0) return -1;
        return a - b;
    });
    
    let count = 0;
    times.forEach(([state, time]) => {
        if (state === 'START') {
            count++;
        }
        else {
            result = result > count ? result : count;
            count--;
        }
    });

    return result;
};


// testCase
console.log(solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]));      // 1
console.log(solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]));      // 2
console.log(solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
    ]));      // 7