function isSameType(value1, value2) {
  //your js code here
	if(typeOf(value1)==typeOf(value2)) alert(true);
	else if (value1==value2=Nan) alert(true);
	else alert(false);
}

// do not change the code below..
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
