// https://school.programmers.co.kr/learn/courses/30/lessons/64064

function solution(user_id, banned_id) {
  let result = 0;
  let arr = [];

  // 일치하는 패턴 매칭 파악하는 함수
  const isMatch = (id, pattern) => {
    pattern = pattern.replace(/\*/g, ".");
    const regex = RegExp("\^(" + pattern + "\)$");
    return regex.test(id);
  };

  const dfs = (remain_users, banned_id, ban) => {
    if (banned_id.length == 0) {
      arr.push(ban);
      return 1;
    } else {
      for (var idx = 0; idx < remain_users.length; idx++) {
        if (isMatch(remain_users[idx], banned_id[0])) {
          dfs(
            [...remain_users.slice(0, idx), ...remain_users.slice(idx + 1)],
            banned_id.slice(1),
            [...ban, remain_users[idx]]
          );
        }
      }
      return 0;
    }
  };

  dfs(user_id.slice(), banned_id.slice(), []);
  result = Array.from(new Set(arr.map(i => i.sort().join()))).length;   // 중복 제거
  return result;
}


// testCase
console.log(solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "abc1**"]
)); // 2
console.log(solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["*rodo", "*rodo", "******"]
)); // 2
console.log(solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "*rodo", "******", "******"]
)); // 3
