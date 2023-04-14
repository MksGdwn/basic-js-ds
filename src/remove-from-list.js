const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arr = [];
  let cur = l;

  while(true) {
    if(cur.value !== k) {
      arr.push(cur.value);
    }

    cur = cur.next;

    if(cur == null) {
      break;
    }
  }

  return arr.reverse().reduce((acc, el) => {
    if(acc) {
      const prev = new ListNode(el);
      prev.next = acc;
      return prev;
    }

    return new ListNode(el);
  }, null);
}

module.exports = {
  removeKFromList
};
