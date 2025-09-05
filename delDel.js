function delDel(str){
  return (str.slice(1,4) == 'del' ? (str[0] + str.slice(4,str.length)) : str; 
}