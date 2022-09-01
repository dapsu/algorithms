// https://programmers.co.kr/learn/courses/30/lessons/84512

// 매우 비효율적...
// function solution(word) {
//     const words = ["A", "E", "I", "O", "U"];
//     const dict = [];
  
//     const getDict = (curWord, depth) => {
//       if (depth === 6) return;
//       dict.push(curWord);

//       for (const nextWord of words) {
//         getDict(curWord + nextWord, depth + 1);
//       }
//     };
  
//     words.forEach((w) => {
//       getDict(w, 1);
//     });
  
//     return dict.indexOf(word) + 1;
//   }


function solution(word) {
    const words = {
        A: 0,
        E: 1,
        I: 2,
        O: 3,
        U: 4,
    };

    const plus = [781, 156, 31, 6, 1];
    /**
    const plus = [?, ?, ?, 1*5+1, 1];
    const plus = [?, ?, 6*5+1, 6, 1];
    const plus = [?, 31*5+1, 31, 6, 1];
    const plus = [156*5+1, 156, 31, 6, 1];
    const plus = [781, 156, 31, 6, 1];
     */

    return [...word].reduce((acc, ch, idx) => acc + words[ch] * plus[idx] + 1, 0);
  }


// testCase
console.log(solution("AAAAE"));     // 6
console.log(solution("AAAE"));      // 10
console.log(solution("I"));         // 1563
console.log(solution("EIO"));       // 1189