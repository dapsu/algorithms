// https://programmers.co.kr/learn/courses/30/lessons/77486

/* sol.1 fail */
// function solution(enroll, referral, seller, amount) {
//     const sellers = {};
//     for (const [idx, person] of enroll.entries()) {
//         sellers[person] = {'refer': referral[idx], 'profit': 0};
//     }
//     for (const [idx, person] of seller.entries()) {
//         sellers[person].profit = amount[idx] * 100;
//     }

//     const sellersKeys = Object.keys(sellers);
//     for (let i = sellersKeys.length-1; i >= 0; i--) {
//         const person = sellersKeys[i];
//         const ref = sellers[person].refer;
//         const commission = Math.floor(sellers[person].profit * 0.1);
//         if (commission > 1) {
//             sellers[person].profit -= commission;
//             if (sellers[ref] !== undefined) sellers[ref].profit += commission;
//         }
//     }    

//     return Object.values(sellers)
//         .map(v => v.profit);
// }

/* sol.2 pass */
function solution(enroll, referral, seller, amount) {
    const sellers = {};
    for (const [idx, person] of enroll.entries()) {
        sellers[person] = {'refer': referral[idx], 'profits': [0]};
    }
    for (const [idx, person] of seller.entries()) {
        sellers[person].profits.push(amount[idx] * 100);
    }

    const sellersKeys = Object.keys(sellers);
    for (let i = sellersKeys.length-1; i >= 0; i--) {
        const person = sellersKeys[i];
        const ref = sellers[person].refer;
        for (const [idx, profit] of sellers[person].profits.entries()) {
            const commission = Math.floor(profit * 0.1);
            if (commission >= 1) {
                sellers[person].profits[idx] -= commission;
                if (sellers[ref] !== undefined) sellers[ref].profits.push(commission);
            }
        }
    }
    
    return Object.values(sellers)
        .map(obj => obj.profits)
        .map(v => v.reduce((a, b) => Number(a) + Number(b)))
}


// testCase
console.log(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10])
);    // [360, 958, 108, 0, 450, 18, 180, 1080]
// console.log(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//     ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//     ["sam", "emily", "jaimie", "edward"],
//     [2, 3, 5, 4])
// );    // [0, 110, 378, 180, 270, 450, 0, 0]