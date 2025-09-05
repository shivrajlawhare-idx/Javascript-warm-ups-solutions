function last2(str){
  let count = 0;
  let temp = str.slice(str.length-2,str.length);
  for(let i=0;i<str.length-2;i++){
    if(str.slice(i,i+2) == temp){
      count++;
    }
  }
  return count;
}