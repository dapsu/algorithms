// https://programmers.co.kr/learn/courses/30/lessons/92341

// 오브젝트 객체 정렬 안 됨
// const getTime = (time) => {
//     let [hour ,minute] = time.split(':');
//     return Number(hour)*60 + Number(minute);
// }

// function solution(fees, records) {
//     const result = [];
//     const parkingInfos = {};
//     const [basicTime, basicCaharge, unitTime, unitCharge] = fees;

//     records.forEach(record => {
//         const [time, carNum, state] = record.split(' ');
//         if (state === 'IN') {
//             if (parkingInfos[carNum] === undefined) parkingInfos[carNum] = [0, getTime(time)];
//             else parkingInfos[carNum][1] = getTime(time);
//         }
//         else if (state === 'OUT') {
//             const outTime = getTime(time);
//             parkingInfos[carNum][0] += outTime - parkingInfos[carNum][1];
//             parkingInfos[carNum][1] = 0;
//         }
//     });

//     const sortedInfos = {};
//     Object.keys(parkingInfos).sort().forEach(key => {
//         sortedInfos[key] = parkingInfos[key];
//     });
//     // console.log(sortedInfos);
    
//     for (let i in sortedInfos) {
//         const info = sortedInfos[i];
//         let totalFee = 0;
//         if (info[0] === 0 && info[1] === 0) info[0] = getTime('23:59');
//         if (info[1] !== 0) {
//             info[0] += getTime('23:59') - info[1];
//             info[1] = 0;
//         }
//         totalFee += basicCaharge;
//         if (info[0] > basicTime) {
//             totalFee += Math.ceil((info[0] - basicTime)/unitTime) * unitCharge;
//         }
//         result.push(totalFee);
//     }
    
//     return result;
// }

// Map 객체로 다시 도전
const getTime = (time) => {
    let [hour ,minute] = time.split(':');
    return Number(hour)*60 + Number(minute);
}

function solution(fees, records) {
    const result = [];
    const parkingInfos = new Map();
    const [basicTime, basicCaharge, unitTime, unitCharge] = fees;

    records.forEach(record => {
        const [time, carNum, state] = record.split(' ');
        if (state === 'IN') {
            if (parkingInfos.get(carNum) === undefined) parkingInfos.set(carNum, [0, getTime(time)]);
            else parkingInfos.get(carNum)[1] = getTime(time);
        }
        else if (state === 'OUT') {
            const outTime = getTime(time);
            parkingInfos.get(carNum)[0] += outTime - parkingInfos.get(carNum)[1];
            parkingInfos.get(carNum)[1] = 0;
        }
    });
    const sortedInfos = new Map([...parkingInfos.entries()].sort());

    for (let i of sortedInfos) {
        const info = i[1];
        let totalFee = 0;
        if (info[0] === 0 && info[1] === 0) info[0] = getTime('23:59');
        if (info[1] !== 0) {
            info[0] += getTime('23:59') - info[1];
            info[1] = 0;
        }
        totalFee += basicCaharge;
        if (info[0] > basicTime) {
            totalFee += Math.ceil((info[0] - basicTime)/unitTime) * unitCharge;
        }
        result.push(totalFee);
    }
    
    return result;
}


// testCase
console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]));    // [14600, 34400, 5000]
console.log(solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]));    // [0, 591]
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));    // [14841]