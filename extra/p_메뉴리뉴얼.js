// 조합 함수: (주문 문자열, 주문 횟수, 인덱스, 기존 주문 배열)를 매개변수로 설정 
const combinations = function(menu, order, cnt, idx, prev) {
    if (prev.length === cnt) {
        let curStr = prev.sort().join('');  // 기존 주문 배열 내 원소가 주문 횟수만큼 있다면 원소들 문자로 생성
        
        // 메뉴 객체에 기존 메뉴가 존재한다면 해당 메뉴 주문 횟수에 +1, 아니라면 새로 생성
        if (menu.has(curStr)) menu.set(curStr, menu.get(curStr)+1);
        else menu.set(curStr, 1);
    }

    // 기존 인덱스부터 문자열 하나씩 추가한 후 조합 재귀
    for (let i = idx; i < order.length; i++) {
        combinations(menu, order, cnt, i+1, [...prev, order[i]]);
    }
}

function solution(orders, course) {
    let menu = new Map();   // Map객체 생성: [['문자열 조합', 주문 횟수], ['문자열 조합', 주문 횟수], ...]

    // 조합으로 주문 횟수에 따른 menu객체 완성시키기
    orders.map(order => {
        course.map(cnt => combinations(menu, order, cnt, 0, []));
    });

    // 주문 횟수 2회 이상인 메뉴들로 필터링
    menu = [...menu.entries()].filter(elem => elem[1] >= 2).sort((a, b) => b.length - a.length);

    let result = [];
    course.map(cnt => {
        let max = 0;
        let tmp = menu.filter(([str, num]) => {
            if (max < num && str.length === cnt) max = num;
            return str.length === cnt;
        })
        tmp.filter(x => x[1] === max).map(x => result.push(x[0]));
    })

    // return 시 오름차순
    return result.sort();
}


// testCase
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))     // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]))     // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]))     // ["WX", "XY"]



// // 다른사람 풀이
// function solution(orders, course) {    
//     let menu = new Map();
    
//     function combination(order, idx, len, prev) {
//         if (prev.length === len) {
//             let cur_key = prev.sort().join('');
//             if (menu.has(cur_key)) {
//                 menu.set(cur_key, menu.get(cur_key) + 1);
//             } else menu.set(cur_key, 1);
//             return;
//         }
        
//         for (let i = idx; i < order.length; i++) {
//             combination(order, i + 1, len, [...prev, order[i]]);
//         }
//     }
    
//     orders.map(order => {
//         course.map(num => combination(order, 0, num, []));
//     });
    
//     menu = [...menu.entries()].filter(item => item[1] > 1).sort((a, b) => b[0].length - a[0].length);
//     console.log('menu=', menu);
    
//     let res = [];
//     course.map(num => {
//         let max = 0;
//         const tmp = menu.filter(([k, v]) => {
//             if (max < v && k.length === num) max = v;
//             return k.length === num;
//         });
//         tmp.filter(x => x[1] === max).map(x => res.push(x[0]));
//     })
    
//     return res.sort();
// }