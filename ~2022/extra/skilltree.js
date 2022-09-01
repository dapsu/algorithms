// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
    let result = 0;

    skill_trees.forEach(trees => {
        const tmp = [...trees].filter(s => skill.includes(s)).join("");
        if (!skill.indexOf(tmp)) result++;
    });

    return result;
}

// sol.2 FP프로그래밍으로
// function solution(skill, skill_trees) {
//     return skill_trees
//         .filter(tree => skill.indexOf([...tree]
//             .filter(s => skill.includes(s)).join('')) === 0).length;
// }

/** 오답노트
 * 스킬은 순서가 있기 때문에 indexOf를 통해 인덱스를 찾을 때 무조건 0이어야 함!
 * 0이 아니면, 앞의 선행 스킬을 익히지 않고 다른 것을 익혔다는 의미이기 때문
 */


// testCase
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));    // 2