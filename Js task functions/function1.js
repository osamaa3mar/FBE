/*
1

function tellFortune(jobtitle,location,partnersname,numberofchildren) {
  document.write(`You will be a ${jobtitle} in ${location}, and married to ${partnersname} with ${numberofchildren} kids.`);
}
tellFortune("eng","amman","alic","5");

*/


// 2
// function calculateDogAge(puppyAge) {
  
//   let dogYears = puppyAge * 7;
//   document.write(`Your doggie is ${dogYears} years old in dog years!`) ;

  
// }
// calculateDogAge(2);



// 3


// function calculateSupply(age , amountperday) {
//     const max_age = 100;
//     let untilage = max_age - age ;
//     let number = amountperday * untilage * 365;
//     console.log(`You will need ${number} cups of tea to last you until the ripe old age of ${max_age}`);
// }
// calculateSupply(30,3);




// 4

// function greet(params) {
//   return `hello ${params}`;
// }

// document.write(greet("osama"));




/*
5
what is the error:
function double(cat) {
  return 2 * x;
}//parameter

function double(7) {
  return 2 * 7;
}parameter value

function double('7') {
  return 2 * 'x';
}value
*/



/*
6
fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2(x)
return 2 * x;
}

function double3(x)  {
  return 2 * x;

*/


/*
7


// function cube(params) {
//   return params *params*params;
// }


/*
8

*/
// function multiply(num1 , num2) {
//   return num1 * num2;
// }

/*
9
*/
// function canIGetADrivingLicense(age) {
  
//   if (age>=20) {
//     return "yes you can";
//   }
//   else{
//     let remainigYears =20-age;
//     return `please come back after ${remainigYears} years to get one`;
//   }
// }
// console.log(canIGetADrivingLicense(12));





/*
10

*/
// function sameLength(string1,string2) {
//   if (string1.length == string2.length) {
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// document.write(sameLength("ss","ss"));




/*
11
*/

// function largerNubmer(num1,num2) {
//   if (num1 >= num2) {
//     return num1;
//   }
//   else{
//     return num2;
//   }
// }
// console.log(largerNubmer(5,6));
/*
12
 function SmallerNumber(num1,num2,num3) {
//   if (num1 <= num2) {
//     return num1;
//   }
//   else{
//     return num2;
//   }
// }
// console.log(SmallerNumber(5,6,8));
/*

*/

/*
13
*/

// function shorterString(str1,str2,str3,str4,str5) {
//   let min = str1;
//   if(str2.length < min.length){
//     min = str2;
//   }
//   else if(min.length > str3.length){
//     min = str3;
//   }
//   else if (min.length > str4.length){
//     min = str4;
//   }
//   else if (min.length > str5.length){
//     min = str5;
//   }
//   return min;
// }
// document.write(shorterString("air","school","car","by","github"));

/*
14
*/
//  function longerString(str1,str2,str3,str4) {
//     let max = str1;
//     if(str2.length > max.length){
//       max = str2;
//     }
//     else if(max.length < str3.length){
//       max = str3;
//     }
//     else if (max.length < str4.length){
//       max = str4;
//     }
//     return max;
//   }
//   document.write(longerString("air","school","car","github"));

/*
15
*/
// function isEven(number) {
//   return (number%2 == 0);
// }
// document.write(isEven(8));

/*
16
*/
// function isOdd(number) {
//   return (number%2 == 1);
// }
// document.write(isOdd(8));

/*
17

*/
// function positive(number) {
//   if (number < 0) {
//     return -1 * number;
//   }
//   else {
//     return number ;
//   }
// }
// document.write(positive(-2));


/*
18

*/
// function fullName(firstName,lastname) {
//   return firstName + " " + lastname;
// }
// document.write(fullName("Alex", "Mercer"));

/*
19
*/
// function average(n1,n2,n3,n4,n5) {
//   return ((n1+n2+n3+n4+n5)/5);
// }

// document.write(average(5,7,9,3,5));
/*


20

*/
// function randomNumber() {
//   return Math.random();
// }
// document.write(randomNumber());
/*



21
*/
// function randomBetweenNumbers(from,to) {
//   return parseInt(Math.random()* (to - from) + from);
// }

// document.write(randomBetweenNumbers(4,10));
/*



22
*/
// function scoreInUniversity(score) {
//   if (score >= 95 && score <= 100) {
//     return "A";
//   } else if (score >= 85 && score <= 94) {
//     return "B";
//   } else if (score >= 70 && score <= 84) {
//     return "C";
//   } else if (score >= 50 && score <= 69) {
//     return "D";
//   } else if (score >= 0 && score <= 49) {
//     return "F";
//   } else {
//     return "Invalid score";
//   }
// }



//23

// let x = 0;

// function counter() {
  
//   x++;
//   return x ; 
  
// }
// document.write(counter());
// document.write(counter());
// document.write(counter());



//24

// function resetCounter(){
//   let pre = x ;
//   x = 0;
//   return `${pre} the counter is reset now`;
// }

// document.write(resetCounter());
// document.write(counter());
