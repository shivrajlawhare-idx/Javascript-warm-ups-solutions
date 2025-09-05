function everyNth(str, n){
  let ans = "";
  for(let i=0;i<str.length;i=i+n){
    ans+=str[i];
  }
  return ans;
}