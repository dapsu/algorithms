// https://school.programmers.co.kr/learn/courses/30/lessons/81303

class Node {
  constructor(index, prevNode) {
    this.index = index;
    this.prev = prevNode;
    this.next;
  }
}

function solution(n, k, cmd) {
  let answer = Array(n).fill("O");
  let root = new Node(0);
  let currentNode = root;
  let prevNode = root;

  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) {
      currentNode = newNode;
    }
  }

  const history = [];
  cmd.map((current) => {
    const [command, count] = current.split(" ");
    let i = 0;
    switch (command) {
      case "U":
        while (i < count && currentNode.prev) {
          currentNode = currentNode.prev;
          i++;
        }
        break;
      case "D":
        while (i < count && currentNode.next) {
          currentNode = currentNode.next;
          i++;
        }
        break;
      case "C":
        history.push(currentNode);
        const prev = currentNode.prev;
        const next = currentNode.next;
        if (prev && next) {
          prev.next = next;
          next.prev = prev;
          currentNode = next;
        } else if (prev) {
          prev.next = null;
          currentNode = prev;
        } else if (next) {
          next.prev = null;
          currentNode = next;
        }
        break;
      case "Z":
        const node = history.pop();
        const prevNode = node.prev;
        const nextNode = node.next;
        if (prevNode) {
          prevNode.next = node;
        }
        if (nextNode) {
          nextNode.prev = node;
        }
        break;
    }
  });

  history.map((node) => {
    answer[node.index] = "X";
  });

  return answer.join("");
}


// testCase
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]));   // "OOOOXOOO"
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]));   // "OOXOXOOO"