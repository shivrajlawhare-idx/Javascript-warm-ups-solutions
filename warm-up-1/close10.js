function close10(a, b){
  if (Math.abs(10-a) < Math.abs(10-b)) return a;
  if (Math.abs(10-b) < Math.abs(10-a)) return b;
  return 0;
}