'use strict';

const assert = require('assert');

function Node(value) {
    this.value = value;
}

Node.prototype.addNext = function (node) {
    assert(node instanceof Node, 'not a node instance');
    assert(arguments.length === 1, 'Arguments count is wrong');

    this.next = node;
}

module.exports = Node;