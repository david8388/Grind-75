/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Solution 1
    /* 
    const brackets = s.split('')
    const closingBrackets = ['}', ')', ']']
    const openingBrackets = ['{', '(', '[']
    const corresponding = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    const buckets = []
    for (let i = 0; i < brackets.length; i++) {
        const char = brackets[i]
        if (openingBrackets.includes(char)) {
            buckets.push(char)
        } else if (closingBrackets.includes(char)){
            const popEl = buckets.pop()
            const mappingEl = corresponding[char]
            if (popEl !== mappingEl) {
                return false
            }
        } 
    }
    return buckets.length === 0
    */
    // Solution 2 
    let stack = []
    const mapping = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (mapping[char]) { // open
            stack.push(mapping[char])
        } else if (stack.pop() !== char) {
            return false
        }
    }

    return stack.length === 0
};