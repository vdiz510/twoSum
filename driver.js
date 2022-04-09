const { twoSum } = require('./twoSum')

let nums = [2, 7, 11, 15], target = 9
let results = twoSum(nums, target)
console.log("Expected: [ 0, 1 ]", "\nOutput:", results)
console.log((nums[results[0]] + nums[results[1]]) === target)

nums = [3, 2, 4], target = 6
results = twoSum(nums, target)
console.log("Expected: [ 1, 2 ]", "\nOutput:", results)
console.log((nums[results[0]] + nums[results[1]]) === target)

nums = [3, 3], target = 6
results = twoSum(nums, target)
console.log("Expected: [ 0, 1 ]", "\nOutput:", results)
console.log((nums[results[0]] + nums[results[1]]) === target)