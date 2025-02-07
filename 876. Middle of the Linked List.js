/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // 1st approach. Use two pointers.
    let slow = head
    let fast = head
    while (fast && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow

    // 2nd approach. Calculate the linked list length, determine the middle index, and return the corresponding(middle) node.
    /*let totalLen = 0
    let curr = head
    while (curr) {
        curr = curr.next
        totalLen++
    }

    middle = head
    let counter = 0
    let endIndex = Math.floor(totalLen / 2)
    while (counter < endIndex) {
        middle = middle.next
        counter++
    }

    return middle*/
}