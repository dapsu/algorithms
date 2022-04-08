// https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript

function solution(cacheSize, cities) {
    if (cities.length === 0) return 0;
    if (cacheSize === 0) return cities.length * 5;

    let result = 0;
    const cacheArr = [];
    
    for (let city of cities) {
        city = city.toLowerCase();
        
        if (cacheArr.includes(city)) {
            cacheArr.splice(cacheArr.indexOf(city), 1);
            cacheArr.push(city);
            result++;
        }
        else {
            if (cacheArr.length === cacheSize) {
                cacheArr.shift();
            }
            cacheArr.push(city);
            result += 5;
        }
    }
    return result;
}


// testCase
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));    // 50
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));    // 21
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));    // 60
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));    // 52
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));    // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));    // 25