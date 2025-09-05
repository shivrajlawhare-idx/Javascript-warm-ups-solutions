function stringE(str){
  let count = 0;
  for(let c of str){
    if(c === 'e') count++;
  }
  return (count>=1 &&  count<=3);
}