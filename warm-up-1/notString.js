function notString(str){
  if(str[0]=='n' && str[1]=='o' && str[2]=='t'){
    return str;
  }
  return 'not '+str;
}