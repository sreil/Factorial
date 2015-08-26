var n = 3; //change here to get different factorial

function factorial( n ) {
  if ( n === 1 ) {
    return 1;
  }
  return n * factorial( n - 1 );
}