alert('Reading separate chapter1.js file');
let message = 'This is a message';
alert(message);

//backticks allow to use variables
let count = 1;
alert(`${message} = ${count}`);
alert(`THe sum is ${1+2}`);

//typeof keyword gives the "type" of the variable 
alert('the type of variable is:' +  typeof count); //number
alert('the type of variable is:' +  typeof(message)); //string
let variable;
alert('the type of variable is:' +  typeof(variable)); //undefined
let nullVariable = null;
alert('the type of variable is:' +  typeof(nullVariable)); //object **
let isEasy = true;
alert('the type of variable is:' +  typeof(isEasy)); //boolean
alert('the type of variable is:' +  typeof(alert)); //string
alert('the type of variable is:' +  typeof(Symbol("name"))); //string
