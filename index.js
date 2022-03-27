var name = prompt("What is your name:");
var firstLetter = name.slice(0,1);
(firstLetter).toUpperCase;
var restOfName = name.slice(1,100)
(restOfName).toLowerCase;

name = firstLetter + restOfName;

alert ("Hello " + name);
