function front22(str){
  if(str.length < 2) return str.repeat(3);
  return str.slice(0,2) + str + str.slice(0,2);
}