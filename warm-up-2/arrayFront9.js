function arrayFront9(nums){
  if(nums.length < 4){
    for(let i of nums){
      if (i == 9) return true;
    }
    return false;
  }
  for(let i=0;i<4;i++){
    if (nums[i]==9) return true;
  }
  return false;
}