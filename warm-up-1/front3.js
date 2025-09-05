function front3(str){
  if(str.length < 3) return str.repeat(3);
  return str.slice(0,3).repeat(3);
}