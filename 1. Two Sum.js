/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const remain = target - curr;
        if (map.has(remain)) {
            return [i, map.get(remain)];
        } else {
            map.set(curr, i);
        }
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
