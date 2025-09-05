function frontBack(str){
  if(str.length==1 || str.length == 0) return str;
  return str[str.length-1] + str.slice(1,str.length-1) + str[0]
}