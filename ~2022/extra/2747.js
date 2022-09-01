// https://www.acmicpc.net/problem/2747

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.srtout
});

let input;

rl.on("line", (line) => {
    input = parseInt(line);
}).on("close", () => {
    console.log(fibonacci(input));
    process.exit();
});

const fibonacci = (num) => {
    let dp = new Array(45).fill(0);
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= num; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[num]; 
}

// console.log(fibonacci(10));
