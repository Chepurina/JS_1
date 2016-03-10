"use strict"
var arr = [];

//input members massive
for (var i = 0; i <= 4; i++){
  arr.push (prompt('Input name:'));
}

var MyName = prompt ('Input your name:');
var flag = false;

//find element
for (var i = 0; i <= 4; i++){
  if (MyName == arr[i]){
    var flag = true;
	alert (MyName + ', you have successfully logged');
  } 
} 

if (flag==false) { alert ('ERROR!!!'); }