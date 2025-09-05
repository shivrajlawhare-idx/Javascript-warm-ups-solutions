function posNeg(a, b, negative){
  if(negative){
    if(a<0 && b<0){
      return true;
    }else{
      return false;
    }
  }
   if(a*b < 0){
      return true;
    }
  return false;
}