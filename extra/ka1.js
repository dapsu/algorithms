// pass
function solution(survey, choices) {
    let result = '';

    const personalities = new Map();
    personalities.set('R', [0]);
    personalities.set('T', [0]);
    personalities.set('C', [0]);
    personalities.set('F', [0]);
    personalities.set('J', [0]);
    personalities.set('M', [0]);
    personalities.set('A', [0]);
    personalities.set('N', [0]);

    
    survey.forEach((personality, i) => {
        const typeOne = personality[0];
        const typeTwo = personality[1];
        const choice = choices[i];

        if (choice === 1) personalities.get(typeOne).push(3);
        else if (choice === 2) personalities.get(typeOne).push(2);
        else if (choice === 3) personalities.get(typeOne).push(1);
        else if (choice === 5) personalities.get(typeTwo).push(1);
        else if (choice === 6) personalities.get(typeTwo).push(2);
        else if (choice === 7) personalities.get(typeTwo).push(3);
    });

    if (personalities.get('R').reduce((a,  b) => a + b) >= personalities.get('T').reduce((a,  b) => a + b)) result += 'R';
    else result += 'T';
    if (personalities.get('C').reduce((a,  b) => a + b) >= personalities.get('F').reduce((a,  b) => a + b)) result += 'C';
    else result += 'F';
    if (personalities.get('J').reduce((a,  b) => a + b) >= personalities.get('M').reduce((a,  b) => a + b)) result += 'J';
    else result += 'M';
    if (personalities.get('A').reduce((a,  b) => a + b) >= personalities.get('N').reduce((a,  b) => a + b)) result += 'A';
    else result += 'N';

    return result;
}


// testCase
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));     // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));       // "RCJA"