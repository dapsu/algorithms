// https://www.acmicpc.net/problem/1991

const fs = require('fs');
const input = fs.readFileSync('../../input.txt').toString().replace(/\r/g, '').split('\n').slice(1);

const binaryTree = new Map();
input.forEach(e => {
    [parent, left, right] = e.split(' ');
    binaryTree.set(parent, [left, right]);
});

const preorder = (node) => {
    if (node === '.') return;
    let tmp = node.slice();
    const [leftChild, rightChild] = binaryTree.get(node);
    tmp += preorder(leftChild) !== undefined ? preorder(leftChild) : '';
    tmp += preorder(rightChild) !== undefined ? preorder(rightChild) : '';
    return tmp;
};

const inorder = (node) => {
    if (node === '.') return;
    let tmp = '';
    const [leftChild, rightChild] = binaryTree.get(node);
    tmp += inorder(leftChild) !== undefined ? inorder(leftChild) : '';
    tmp += node;
    tmp += inorder(rightChild) !== undefined ? inorder(rightChild) : '';
    return tmp;
};

const postorder = (node) => {
    if (node === '.') return;
    let tmp = '';
    const [leftChild, rightChild] = binaryTree.get(node);
    tmp += postorder(leftChild) !== undefined ? postorder(leftChild) : '';
    tmp += postorder(rightChild) !== undefined ? postorder(rightChild) : '';
    tmp += node;
    return tmp;
};

let result = preorder('A') + '\n' + inorder('A') + '\n' + postorder('A');
console.log(result);