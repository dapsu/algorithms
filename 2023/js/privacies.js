// https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript

function solution(today, terms, privacies) {
  const answer = [];
  const termsObj = {};
  terms.forEach((term) => {
    const [type, date] = term.split(" ");
    termsObj[type] = date;
  });
  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(" ");
    if (isValidTerm(today, date, termsObj[type])) {
      answer.push(index + 1);
    }
  });
  return answer;
}

function isValidTerm(today, privacyDate, term) {
  let calcDate = 0;
  let [todayYear, todayMonth, todayDay] = today.split(".");
  let [privacyYear, privacyMonth, privacyDay] = privacyDate.split(".");
  calcDate += (todayYear - privacyYear) * 12 * 28;
  calcDate += (todayMonth - privacyMonth) * 28;
  calcDate += (todayDay - privacyDay);
  return (term * 28) <= calcDate;
}

console.log(solution("2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])); // [1, 3]
console.log(solution("2020.01.01",	["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])); // [1, 4, 5]
