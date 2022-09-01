// https://programmers.co.kr/learn/courses/30/lessons/17686

// fail
// function solution(files) {
//     const result = [];

//     files.forEach(file => {
//         const head = file.match(/\D+/).join('').toLowerCase();
//         const number = file.match(/\d/g).join('');
//         result.push([file, head, number]);
//     });
    
//     result.sort((a, b) => {
//         if (a[1] < b[1]) return -1;
//         if (a[1] > b[1]) return 1;

//         if (parseInt(a[2]) < parseInt(b[2])) return -1;
//         if (parseInt(a[2]) > parseInt(b[2])) return 1;

//         return a[0] - b[0];
//     });

//     return result.map(e => e[0]);
// }


function solution(files) {
    files.sort((a, b) => {
        const headA = a.match(/\D+/).join('').toLowerCase();
        const headB = b.match(/\D+/).join('').toLowerCase();

        if (headA < headB) return -1;
        if (headA > headB) return 1;

        const numA = a.match(/\d+/)[0].replace(/^0+/, '');
        const numB = b.match(/\d+/)[0].replace(/^0+/, '');

        return numA - numB;
    });

    return files;
}


// testCase
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));    
    // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));    
    // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]