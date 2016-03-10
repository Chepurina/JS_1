"use strict"
//funkciya vozvedeniya v stepen
function pow(a, n) {
  var b=1;
  
  for (var i = 0; i < n; i++) {
	  b = b*a;
  }
  
	return b;
}

var a = prompt('Input a:');
var n = prompt('Input n:');

//proverka na otricatelnuu stepen
if (n < 0) {
 console.log('Error! Input number>0, please');
} else { console.log( pow(a,n) ); }