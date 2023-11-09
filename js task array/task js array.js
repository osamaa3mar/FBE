


/*
1
Correct the syntax error
 [ 1,7,9,45]

 ["Str","alex","moh"]

 ['the','fox','over','lazy', 'dog']

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

banana > 1
tomato > 0

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
let food = ["banana","apple","juice","mansaf","mojadra"];
2- Favorite Sport (3)
let sport = ["soccer","tennis","basket ball"];
3- Favorite Movie (4)
let movie = ["jacksparoo","john wick","interste"];
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"

let array = ["osama","is","os"];
function firstOfArray(arr) {
    return arr[0];
}
document.write(firstOfArray(array));

*/

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"

let array = ["osama","is","os"];
function lastOfArray(arr) {
    return arr[arr.length-1];
}
document.write(firstOfArray(array));
*/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]

let array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
array.unshift(8);
array.unshift(7);
array.unshift(6);
array.unshift(5);
array.unshift(4);
array.unshift(3);
array.unshift(2);
array.unshift(1);
array.push(10);
console.log(array);
*/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
array2.unshift(1);
array2.shift();
array2.pop();
array2.push(10);
console.log(array2);
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

let array = ["osama","is","os","are","osama","is","os","are"];
function middleOfArray(arr) {
    let sol = [];
    if (arr.length%2==0) {
        sol[0] = arr[Math.floor(arr.length/2 - 1)];
        sol[1] =arr[Math.floor(arr.length/2 )];
        return sol;
    } else {
        sol[0] = arr[Math.floor(arr.length/2)];
        return sol;
    }
}
document.write(middleOfArray(array));
*/



/*
9
Using assignment operator (=)
make the animals array have these animals

var animals = ['cat', 'ele', 'bird']


animals[3] = 'zebra';
animals[4] = 'elephant';
console.log(animals);
var nums= [1,2,3,8,9]


nums[5] = 5;
nums[6] = -22;
nums[7] = 3.5;
nums[8] = 44;
nums[9] = 98;
nums[10] = 44;
console.log(nums);
*/

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self


function indexOfArray(nums,number) {
    return nums[number];
}
*/


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self


function arrayExceptLast(nums) {
    nums.pop();
    return nums;
}
let nums = [1,2,3,8,9];
arrayExceptLast(nums);
console.log(nums);
*/

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
function arrayExceptLast(nums,value) {
    nums.push(value);
    return nums;
}

*/


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self


function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}
var nums= [1,2,3,8,9]
console.log(sumArray(nums));


function sumArray(array) {
    let sum = 0;
    let i = 0;
    while (i< array.length) {
        sum +=array[i];
        i++;
    }
    return sum;
}
*/


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
function minInArray(nums) {
    let min =nums[0];
    for (let index = 0; index < nums.length; index++) {
        if (nums[index]<min) {
            min = nums[index];
        }
        
    }
    return min;
}
var nums= [10,2,3,8,9]
console.log(minInArray(nums));



function minInArray(nums) {
    let min =nums[0];
    let i =0;
    while (i< nums.length) {
        if (nums[i]<min) {
            min = nums[i];
        }
        i++;
    }
    return min;
}
var nums= [10,2,3,8,9]
console.log(minInArray(nums));
*/

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop

function removeFromArray(array,number) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == number) {
             array.splice(index,1);
        }
    }
    return array;
}
var nums= [10,2,3,8,9];
console.log(removeFromArray(nums,8));
**try more cases by your self
*/

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

function oddArray(array) {
    let sol =[];
    for (let index = 0; index < array.length; index++) {
        
        if (array[index]%2!=0) {
            sol.push(array[index]);
        }
        
    }
    return sol;
}
var nums= [1,2,3,8,9];
console.log(oddArray(nums));


function oddArray(array) {
    let sol =[];
    let index =0;
    while (index < array.length) {
        
        if (array[index]%2!=0) {
            sol.push(array[index]);
        }
        index++;
    }
    return sol;
}
var nums= [1,2,3,8,9,11];
console.log(oddArray(nums));


*/

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6



function aveArray(array) {
    let avg =0;
    let sum =0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];        
        
    }
    avg = sum /array.length;
    return avg;
}
let arr = [1,2,3,8,9]
console.log(aveArray(arr));

*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"



function shorterInArray(array) {
    let shorter = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length< shorter) {
            shorter = array[index];
        }
        
    }
    return shorter;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArray(strings));
*/



/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

function repeatChar(str,c) {
    let counter =0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == c) {
            counter++;
        }
        
    }
    return counter;
}
var s= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(s,'a'));

*/

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

function evenIndexOddLength(array) {
    let sol =[];
    for (let index = 0; index < array.length; index++) {
        sol.push(Math.pow(array[index],index));
        
    }
    return sol;

}
var nums= [44, 5, 4, 3, 2, 10]
console.log(evenIndexOddLength(nums));
*/

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(array) {
    let sol =[];
    for (let index = 0; index < array.length; index++) {
        if (index%2==0) {
            if (array[index]%2==0) {
                sol.push(array[index]);
            }
        }
        
    }
    return sol;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums));
