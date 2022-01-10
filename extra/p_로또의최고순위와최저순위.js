function solution(lottos, win_nums) {
    const result = [];

    let correctCnt = lottos.filter(num => win_nums.includes(num)).length;
    let zeroCnt = lottos.filter(num => num === 0).length;

    // 당첨 번호와 같은 번호의 개수가 0~1개라면 6위, 아니라면 7-correctCnt로 최저 순위 반환
    let minRank = 7-correctCnt >= 6 ? 6 : 7-correctCnt;
    // 0의 개수가 6개라면 최고 순위 1위 가능, 6개 아니라면 0의 개수 만큼 숫자를 빼서 순위 올림
    let maxRank = zeroCnt === 6 ? 1 : minRank - zeroCnt;

    result.push(maxRank, minRank);

    return result;
}


// test
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));