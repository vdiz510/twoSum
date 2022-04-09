/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  result = []
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (map.has(complement) && map.get(complement) != i) {
      result.push(i)
      result.push(map.get(complement))
      return result
    }
  }

};

module.exports = {
  twoSum
}