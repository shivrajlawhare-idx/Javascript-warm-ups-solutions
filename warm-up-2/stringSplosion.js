function stringSplosion(str){
  let ans = '';
  for(let i=0;i<str.length;i++){
    ans+=str(0,i+1)
  }
  return ans;
}