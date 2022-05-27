// https://programmers.co.kr/learn/courses/30/lessons/17678

function solution(n, t, m, timetable) {
    let firstTime = 540;
    const waitingQueue = timetable.map(e => e.split(':'))
                            .map(([hour, minute]) => Number(60*hour) + Number(minute))
                            .sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        let crewOnBus = waitingQueue.filter(time => time <= firstTime).length;
        if (i === n-1) {
            if (crewOnBus >= m) {
                firstTime = waitingQueue[m-1] - 1;
            }
        }
        else {
            waitingQueue.splice(0, crewOnBus > m ? m : crewOnBus);
            firstTime += t;
        }
    }

    let result = '';
    let [hour, minute] = [String(Math.floor(firstTime / 60)), String(firstTime % 60)];
    result += hour.length > 1 ? hour : '0' + hour;
    result += ':';
    result += minute.length > 1 ? minute : '0' + minute;

    return result;
}


// testCase
console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"]));    // "09:00"
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"]));    // "09:09"
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));    // "08:59"
console.log(solution(1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"]));    // "00:00"
console.log(solution(1, 1, 1, ["23:59"]));    // "09:00"
console.log(solution(10, 60, 45, ["23:59","23:59", "23:59", "23:59", "23:59", 
                                "23:59", "23:59", "23:59", "23:59", "23:59", 
                                "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]));    // "18:00"