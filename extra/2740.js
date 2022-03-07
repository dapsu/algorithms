/******************* 문제 다시 보기!!!! *******************/
// https://www.acmicpc.net/problem/2740

/*res01
 * 메모리: 11872KB
 * 시간: 212 ms
 */
// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x)); 


// const A=[]; //첫번째 행렬
// const B=[];  // 두번째 행렬
// const C =[]; // 계산하기 좋게 두번째 행렬을 바꿔서 만들 행렬

// //첫번째 행렬 정리
// const [N,M] = input.shift();  
// for(let i = 0; i<N; i++){
//   A.push(input.shift());
// }

// //두번째 행렬 정리
// const [K,L] = input.shift();
// for(let i = 0; i<K; i++){
//   B.push(input.shift());
// }

// //두번째 행렬 수정
//  while(B[0].length>0){
//    const temp = [];
//    for(let i = 0; i<K;i++){
//     temp.push(B[i].shift())
//    }
//    C.push(temp)
//  }

//  // 행렬의 곱셈
//  const answer = [];
//  for(let i = 0; i<N; i++){
//   answer.push([])
//    const X = A[i];
//    for(let j = 0; j<L; j++){
//      let sum = 0;
//     const Y = C[j]
//      for(let k = 0; k<K; k++){
//       sum+=X[k]*Y[k];
//      }
//      answer[answer.length-1].push(sum)
//    }
//  }

//  const result = answer.map(v=>v.join(' ')).join('\n')

//  console.log(result)


/*res02
 * 메모리: 12924 KB
 * 시간:  260 ms
 */
// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });
// let input = [];
// rl.on("line", function (line) {
// 	input.push(
// 		line
// 			.toString()
// 			.split(" ")
// 			.map((el) => +el)
// 	);
// }).on("close", function () {
// 	let size = input.shift();
// 	let hang1 = input.splice(0, size[0]);
// 	size = input.shift();
// 	let hang2 = input.splice(0, size[0]);
// 	let result = [];

// 	for (let i = 0; i < hang1.length; i++) {
// 		let value = [];
// 		for (let j = 0; j < hang2[0].length; j++) {
// 			let gop = hang1[i].map((el, idx) => el * hang2[idx][j]);
// 			let sum = gop.reduce((past, curr) => past + curr, 0);
// 			value.push(sum);
// 		}
// 		result.push(value.join(" "));
// 	}
// 	console.log(result.join("\n"));
// 	process.exit();
// });