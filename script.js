const num1 = 60;
const num2 = 15;
const num3 = 38.5;
const num4 = 96;
const side1 = 15;
const side2 = 70;
const side3 = 40;

// exe 1

// Print “Number is even” if the num1 is divisible by 2.
// Else print “Number is odd” if the num1 returns a remainder when divided by 2.
 if (num1 % 2 === 0 ){
    console.log ("number is even");
    console.log ("number is even");

 }

 // exe 2

 const variable2 = "81";
// check if variable2 is number.
// if true print “Variable is not a number”
// if false print “Variable is a valid number”
// search about isNan()
isNaN(variable2){
    return "variable is not a number";
 } return "veriable is a valid number";
console.log(isNaN);

// exe 3

// Print "num1 is the largest" if num1>num2.
// Print "num2 is the largest" if num1<num2.
// Else print "num1 and num2 are equal".

 if(num1 > num2){
    console.log("nom1 is the largest");
 } else if(num1 < num2) {
    console.log("num2 is the largest");
 }else{
    console.log("num1 and num2 are equal");
 }

 // exe 4

// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2>num1 and num2>num3.
// Else print num3.

if(num1 > num2 && num1 > 3){
    console.log("num1 is the largest");
}else if(num2>num1 && num2>num3){
    console.log("num2 is the lsrgest");
}else{
    console.log(num3);
}

// exe 5

// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.
if(side1 == side2 == side3){
    console.log("scalen tringle");
}else{
    console.log("scalen tringle");
}

// exe 6
const start = 11;
const end = 70;
// Print “Between the range” if num4 is between start and end values
// Else Print “Outside the range” since num is outside start and end values.
if(start > num4 < end){
    console.log("Bwteen the range");
}else{
    console.log("outhide the range");
}

// exe 7
const operator = "module";
// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”

// exe 8
const year = 2024;
// If year is divisble by 4 and not divisble by 100 then print “leap year”.
// Or if year is divisible by 400 then print “leap year”.
// Else print “not a leap year”.
if(year % 4 = 0 && year % 100){
    console.log("leap lear");
}else if(year % 400 == 0){
    console.log("leap lear");
}else{
    console.log("not a leap year")
}