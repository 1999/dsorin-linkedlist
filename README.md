# dsorin-linkedlist

[![Greenkeeper badge](https://badges.greenkeeper.io/1999/dsorin-linkedlist.svg)](https://greenkeeper.io/)
Linked list implementation in JavaScript

# How to develop
```bash
git clone git@github.com:1999/dsorin-linkedlist.git
cd dsorin-linkedlist
npm install
```

# API
```javascript
const Node = require('dsorin-linkedlist');

const node1 = new Node(1);
const node2 = new Node(2);
node1.addNext(node2);
console.log(node1.value) // 1
```