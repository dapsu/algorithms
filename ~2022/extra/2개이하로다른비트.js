// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
    const result = [];

    numbers.forEach(number => {
        const target = "0" + number.toString(2);

        if (target[target.length-1] === "0") result.push(number+1);
        else {
            const arr = [...target];
            for (let i = arr.length; i >= 0; i--) {
                if (arr[i] === "0") {
                    arr.splice(i, 2, "10");
                    const tmp = parseInt(arr.join(""), 2);
                    result.push(tmp);
                    break;
                }
            }
        }
    });

    return result;
}


// testCase
console.log(solution([2, 7]));      // [3, 11]

/** toString()
 * object를 문자열로 반환
 * 이때, 매개변수는 기수(radix)를 취함. 기수를 이용하여 다른 진수로 변환 가능
 * e.g. 
 * let tenInt = 10; 
 * console.log(tenInt.toString(2));  // 1010
 * 
 * parseInt의 두 번째 매개변수 역시 진법을 활용하는 것으로, 첫 번째 매개변수의 진법이 무엇인지 적는 것.
 * e.g. parseInt(1010, 2);      // 10
 */