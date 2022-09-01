// https://programmers.co.kr/learn/courses/30/lessons/49994

const solution = (dirs) => {
    let result = 0;
    const arr = [];
    let curr = [0, 0];

    const roads = (curPoint, nextPoint) => {
        const tmp = curPoint.join("") + nextPoint.join("");
        const tmp2 = nextPoint.join("") + curPoint.join("");

        if (nextPoint[0] <= 5 && nextPoint[0] >= -5 && nextPoint[1] <= 5 && nextPoint[1] >= -5) {
            curr = nextPoint;
            if (!arr.includes(tmp)) {
                result++;
                arr.push(tmp);
                arr.push(tmp2);
            }
        }
    }

    for (const dir of dirs) {
        if (dir === "U") {
            let next = [curr[0], curr[1]+1];
            roads(curr, next);
        }
        else if (dir === "L") {
            let next = [curr[0]-1, curr[1]];
            roads(curr, next);
        }
        else if (dir === "R") {
            let next = [curr[0]+1, curr[1]];
            roads(curr, next);
        }
        else {
            let next = [curr[0], curr[1]-1];
            roads(curr, next);
        }
    }

    return result;
}


// testCase
console.log(solution("ULURRDLLU"));    // 7
console.log(solution("LULLLLLLU"));    // 7