function solution(nums) {
  var answer = 0;
  const newArr = []
  const N = nums.length / 2

  for (let i = 0; i < nums.length; i++) {
    if (newArr.length < N) {
      if (newArr.includes(nums[i]) !== true) {
        newArr.push(nums[i])
      }
    }
  }
  answer = newArr.length
  return answer;
}
