class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
  }

  hash(key) {
    let id = 0;

    for (let i = 0; i < key.length; i++) {
      id += key.charCodeAt(1) * 100;
    }
    return id % this.size;
  }

  insert(key, value) {
    const id = this.hash(key);

    this.table[id] = value;
  }

  //선형 탐색으로 해시 충돌 방지한 삽입방법
  insertLinearProbing(key, value) {
    const id = this.hash(key);

    if (this.table[id]) {
      let flag = true;

      for (let i = id + 1; i !== id; i++) {
        if (i === this.table.length) {
          i = 0;
        }
        if (!this.table[i]) {
          this.table[i] = value;
          flag = false;
          break;
        }
      }
      if (flag) {
        return console.log("삽입 실패: 테이블에 공간이 없습니다!");
      }
    } else {
      this.table[id] = value;
    }
  }

  insertChaining(key, value) {
    const id = this.hash(key);
    const newNode = new HashTableNode(key, value);

    if (this.table[id]) {
      const currentNode = this.table[id];

      this.table[id] = newNode;
      this.table[id].next = currentNode;
    } else {
      this.table[id] = newNode;
    }
  }

  search(key) {
    const id = this.hash(key);
    const value = this.table[id];

    if (value) {
      return value;
    } else {
      return console.log("검색 실패");
    }
  }

  searchChaining(key) {
    const id = this.hash(key);
    let currentNode = this.table[id];

    while (currentNode) {
      if (currentNode.key === key) {
        break;
      }

      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
