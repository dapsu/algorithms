// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
    m = m.replace(/\w#/g, a => a[0].toLowerCase());

    const getTime = (start, end) => {
        const time = (t) => {
            t = t.split(":");
            return t[0]*60 + t[1];
        }
        return  time(end) - time(start); 
    }

    const infos = musicinfos.map((info) => {
        let [start, end, title, melody] = info.split(",");
        const musicTime = getTime(start, end);
        melody = melody.replace(/\w#/g, a => a[0].toLowerCase());
        let stream = melody.repeat(Math.floor(musicTime / melody.length)) + [...melody].slice(0, musicTime % melody.length).join("");
        return [title, musicTime, stream];
    });

    const result = infos.reduce((result, curr) => {
        if (curr[2].includes(m)) {
            if (!result.length || result[2].length < curr[2].length) return curr;
        }
        return result;
    }, []);
    return !result.length ? "(None)" : result[0];
}


// testCase
console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));    // "HELLO"
console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]));    // "FOO"
console.log(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]));    // "WORLD"