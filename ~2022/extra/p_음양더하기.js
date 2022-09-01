function solution(absolutes, signs) {
    let result = 0;

    for (let i=0; i<absolutes.length; i++) {
        if (signs[i] == true) {
            result += absolutes[i];
        }
        else {
            result -= absolutes[i];
        }
    }
    return result;
}

console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));
