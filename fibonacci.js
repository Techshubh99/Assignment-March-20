// Write a program to print to Fibonacci series print?
let a = 0
let b = 1
console.log(a);
console.log(b);
for(i=2; i<10; i++)
{
    let result = a + b;
    console.log(result);
    a = b;
    b = result;
}
