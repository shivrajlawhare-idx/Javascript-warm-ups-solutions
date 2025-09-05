function arrayCount9(nums){
  let count = 0;
  for(let i of nums){
    if (i == 9) count++;
  }
  return count;
}