function solution(orders, course) {
    orders.forEach(order => {
       order.map(); 
    });

    
    // return 시 오름차순
}


// testCase
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))     // ["AC", "ACDE", "BCFG", "CDE"]
// console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]))     // ["ACD", "AD", "ADE", "CD", "XYZ"]
// console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]))     // ["WX", "XY"]