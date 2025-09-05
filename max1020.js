function max1020(a, b){
  if((a>=10 && a<=20) && (b>=10 && b<=20)) return a > b ? a : b;
  if(!(a>=10 && a<=20) && (b>=10 && b<=20)) return b;
  if((a>=10 && a<=20) && !(b>=10 && b<=20)) return a;
  return 0;
}