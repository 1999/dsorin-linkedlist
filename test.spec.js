'use strict';

const assert = require('assert');
const Node = require('./index.js');

describe('dsorin-linkedlist', function () {
    it('should use expected API', function () {
        assert.strictEqual(typeof Node, 'function', 'Node is not a function');
        
        const node1 = new Node(123);
        assert.strictEqual(typeof node1.addNext, 'function', 'addNext is not a function');
    });

    it('should throw if argument is not Node instance', function () {
        const node1 = new Node(123);

        assert.throws(function () {
            node1.addNext('some string');
        }, 'Should have thrown');
    });

    it('should throw if arguments count is not equal 1', function () {
        const node1 = new Node(123);
        const node2 = new Node(322);

        assert.throws(function () {
            node1.addNext(node2, 'some string');
        }, 'Should have thrown');
    });
});


