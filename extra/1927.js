// https://www.acmicpc.net/problem/1927

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n').slice(1).map(e => Number(e));

// 시간 초과
// const heap = [];
// let result = '';

// input.forEach(x => {
//     if (x === 0) {
//         if (heap.length > 0) {
//             const minNum = Math.min(...heap);
//             const tmp = heap.indexOf(minNum);
//             const remove = heap.splice(tmp, 1);
//             result += String(remove);
//         }
//         else result += '0';
//         result += '\n';
//     }
//     else heap.push(x);
// });

// console.log(result.trim());

// Heap 구현으로 해결
/**
 * heap: 부모의 값이 자식의 값보다 항상 크다는 조건을 만족하는 완전 이진 트리
 * 힙에서 최댓값은 루트에 위치
 */

class Heap {
    constructor() {
        this.nodes = [];
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftChild(idx) {
        return idx*2 + 1;
    }

    getRigthChild(idx) {
        return idx*2 + 2;
    }

    // 노드 삽입 시 실행, 반복 구조 구현
    percolateUp() {
        let nodeIdx = this.nodes.length - 1;
        let parentIdx = this.getParent(nodeIdx);
        while (parentIdx > 0) {
            if (this.nodes[nodeIdx] < this.nodes[parentIdx]) {
                [this.nodes[nodeIdx], this.nodes[parentIdx]] = [this.nodes[parentIdx], this.nodes[nodeIdx]];
            }
            nodeIdx = parentIdx;
            parentIdx = this.getParent(nodeIdx);
        } 
    }
    
    // 노드 추출 시 실행, 재귀 구조 구현
    percolateDown(nodeIdx = 0) {
        let [leftIdx, rightIdx] = [this.getLeftChild(nodeIdx), this.getRigthChild(nodeIdx)];
        let smallest = nodeIdx;
        if (!this.nodes[rightIdx] && this.nodes[leftIdx] < this.nodes[smallest]) {
            smallest = leftIdx;
        }
        if (leftIdx <= this.nodes.length && this.nodes[leftIdx] < this.nodes[smallest]) {
            smallest = leftIdx;
        }
        if (rightIdx <= this.nodes.length && this.nodes[rightIdx] < this.nodes[smallest]) {
            smallest = rightIdx;
        }
        if (smallest !== nodeIdx) {
            [this.nodes[nodeIdx], this.nodes[smallest]] = [this.nodes[smallest], this.nodes[nodeIdx]];
            this.percolateDown(smallest);
        }
    }
    
    // 노드 삽입
    insert(node) {
        this.nodes.push(node);
        this.percolateUp();
    }
    
    // 노드 추출
    extract() {
        let extracted = this.nodes[0];
        if (this.nodes.length === 1) {
            this.nodes.pop();
            return extracted;
        }
        this.nodes[0] = this.nodes.pop();
        this.percolateDown();
        return extracted;
    }
}

class MinHeap {
    constructor() {
        this.nodes = [];
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftChild(idx) {
        return idx*2 + 1;
    }

    getRigthChild(idx) {
        return idx*2 + 2;
    }

    percolateUp(nodeIdx = this.nodes.length - 1) {
        let parentIdx = this.getParent(nodeIdx);
        if (this.nodes[nodeIdx] < this.nodes[parentIdx]) {
            [this.nodes[nodeIdx], this.nodes[parentIdx]] = [this.nodes[parentIdx], this.nodes[nodeIdx]];
        }
        else return;
        nodeIdx = parentIdx;
        this.percolateUp(nodeIdx);
    }
    
    percolateDown(nodeIdx = 0) {
        let [leftIdx, rightIdx] = [this.getLeftChild(nodeIdx), this.getRigthChild(nodeIdx)];
        let smallest = nodeIdx;
        if (!this.nodes[rightIdx] && this.nodes[leftIdx] < this.nodes[smallest]) {
            smallest = leftIdx;
        }
        if (leftIdx <= this.nodes.length && this.nodes[leftIdx] < this.nodes[smallest]) {
            smallest = leftIdx;
        }
        if (rightIdx <= this.nodes.length && this.nodes[rightIdx] < this.nodes[smallest]) {
            smallest = rightIdx;
        }
        if (smallest !== nodeIdx) {
            [this.nodes[nodeIdx], this.nodes[smallest]] = [this.nodes[smallest], this.nodes[nodeIdx]];
            this.percolateDown(smallest);
        }
    }
    
    // 노드 삽입
    insert(node) {
        this.nodes.push(node);
        this.percolateUp();
    }
    
    // 노드 추출
    extract() {
        let extracted = this.nodes[0];
        if (this.nodes.length === 1) {
            this.nodes.pop();
            return extracted;
        }
        this.nodes[0] = this.nodes.pop();
        this.percolateDown();
        return extracted;
    }
}

const heap = new MinHeap();
let result = '';

input.forEach(x => {
    if (x === 0) {
        if (heap.nodes.length > 0) {
            result += heap.extract();
        }
        else result += '0';
        result += '\n';
    }
    else heap.insert(x);
});

console.log(result.trim());