Fragmento de código 1 
function hello() {
    console.log('hola');
}
hello();
console.log('Dojo');            

no hay diagramas


Fragmento de código 2
function hello() {
    console.log('hola');
    return 15;
}
var result = hello();
console.log('el resultado es', result);

hello()     |     15
result      |     15


Fragmento de código 3
function numPlus(num) {
    console.log('num es', num);
    return num+15;
}
var result = numPlus(3);
console.log('x es', result);

en funcion:
num         |   3

result      |   numPlus(3)
numPlus(3)  |   18
result      |   18


Fragmento de código 4: hay un giro
var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

num                 |   15
result              |   logAndReturn(10)

en funcion:
num                 |   10

logAndReturn(10)    |   10
result              |   10
num                 |   15


Fragmento de código 5
var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

num             |   15

en funcion:
num             |   10

result          |   timesTwo(10)
timesTwo(10)    |   20


Fragmento de código 6
function timesTwoAgain(num) {
    console.log('num es', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('el resultado es', result);


Fragmento de código 7
function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))


Fragmento de código 8
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))


Fragmento de código 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum es', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('el resultado es', result);


Fragmento de código 10
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum es', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('el resultado es', result);
