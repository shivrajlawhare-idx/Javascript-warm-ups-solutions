function frontTimes(str, n){
  if(str.length < 3) return str.repeat(n);
  return str.slice(0,3).repeat(n);
}