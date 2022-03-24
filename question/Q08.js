const makeDiv = (str) => {
    let div;

    if (str[0] === "p") div = str.slice(1, 6);
    else div = str[0];

    return div;
};

const sumDiv = (s1, s2) => {
    if (s1 === "b" || s2 === "b") return 256;
    
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (s1[i] === "b" || s2[i] === "b") count++;
    }

    return 64*count;
};

function solution(s1, s2) {
    if (s1 === "b" || s2 === "b") return 1024;

    let s1Div1 = makeDiv(s1.slice(1));
    let s1Div2 = makeDiv(s1.slice(1 + s1Div1.length));
    let s1Div3 = makeDiv(s1.slice(1 + s1Div1.length + s1Div2.length));
    let s1Div4 = makeDiv(s1.slice(1 + s1Div1.length + s1Div2.length +  + s1Div3.length));
    
    let s2Div1 = makeDiv(s2.slice(1));
    let s2Div2 = makeDiv(s2.slice(1 + s2Div1.length));
    let s2Div3 = makeDiv(s2.slice(1 + s2Div1.length + s2Div2.length));
    let s2Div4 = makeDiv(s2.slice(1 + s2Div1.length + s2Div2.length +  + s2Div3.length));

    let div1 = sumDiv(s1Div1, s2Div1); 
    let div2 = sumDiv(s1Div2, s2Div2); 
    let div3 = sumDiv(s1Div3, s2Div3); 
    let div4 = sumDiv(s1Div4, s2Div4); 
 
    return div1 + div2 + div3 + div4;
}


// testCase
console.log(solution("ppwwwbpbbwwbw", "pwbwpwwbw"));    // 640
console.log(solution("b", "w"));    // 1024