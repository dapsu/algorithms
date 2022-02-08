function solution(s) {
    let result = [];
    s = s.replace('{{', '').replace('}}', '').split('},{');
    let arr = s.map(elem => elem.split(',').map(s => Number(s)));
    
    arr.sort((a, b) => a.length - b.length);

    arr.forEach(elem => {
        for (const e of elem) {
            if (result.includes(e)) continue;
            else result.push(e);
        }
    });

    return result;
}


// tsetCase
console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));     // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));     // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}"));                  // [111, 20]
console.log(solution("{{123}}"));                           // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));     // [3, 2, 4, 1]