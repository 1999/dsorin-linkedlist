# dsorin-linkedlist
Linked list implementation in JavaScript

# API
```javascript
const Node = require('dsorin-linkedlist');

const node1 = new Node(1);
const node2 = new Node(2);
node1.addNext(node2);
console.log(node1.value) // 1
```