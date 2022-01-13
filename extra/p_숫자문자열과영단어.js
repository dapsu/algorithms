function solution(s) {
    s = s.replace(/zero/gi, 0);
    s = s.replace(/one/gi, 1);
    s = s.replace(/two/gi, 2);
    s = s.replace(/three/gi, 3);
    s = s.replace(/four/gi, 4);
    s = s.replace(/five/gi, 5);
    s = s.replace(/six/gi, 6);
    s = s.replace(/seven/gi, 7);
    s = s.replace(/eight/gi, 8);
    s = s.replace(/nine/gi, 9);

    
    return Number(s);
}


// 다른사람 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);     // numbers[i]로 배열 내 문자가 분리되면
        answer = arr.join(i);                   // 분리된 문자 사이에 인덱스값 i를 통해 문자를 숫자로 대체 가능.. 천잰가
    }

    return Number(answer);
}


// test
console.log(solution("one4seveneight"));

/*
두 솔루션 비교 결과 두 번째 방법이 훨씬 빠름..
첫 번째는 평균적으로 0.4 ms, 두 번째는 0.06ms...
*/