
// brackets balanced done
// somesum  done
// conatins duplicate done
// unique arr done
// 2 sum done 
// remove duplicate done
// second largest (kth ) done <<< without sort 
// largest number done 
// occurence of charcter done
// reverese array and string  done
// palindrom done  <<< largest [palindrom]
// anagram   <<<< largest
// array multiply by 2 add all numbers pickout numbers divisible by 2 s
// a to the power b type of questions 





// second largest
// for the solution without sort go down:


// let arr = [1,5,9,6,4]
// function secondlargest(arr,k){
//     arr.sort((a,b)=>b-a)
    
//     return arr[k-1]
// }
// console.log(secondlargest(arr,2))





// contains duplicate 

// let arr = [4,5,7,4,6,5];
// function containsduplicate(){
//     const map = new Map()
//     for(const n of arr){
//         if(map.has(n)) {
//             return true;
//         }
        
//             map.set(n,true)

//         }
//         return false ;
//     }
    

// console.log(containsduplicate())




// sum of some elements of an array i.e less than b+1
// sum up all elements of array who are less then the b+1
// let arr = [1,2,3,4,5,9]
// let b = 4;
// let sum = 0;

// function sumofsumelems(arr , b ){
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] < b + 1){
//             sum += arr[i]
//         }
//     }
//     return sum ;
// }
// console.log(sumofsumelems(arr,4))



// brackets are balanced

// // {[()]} 
// function bracketsarebalanced(input){
// let Openbracketscount = 0;
// let Closedbracketscount = 0;
// for(let char of input ){
//     if(char === "{"|| char === "["|| char === "("){
//         Openbracketscount++;
//     }
//     if(char === "}"|| char === "]"|| char === ")"){
//         Closedbracketscount++;
//     }
//     if(Openbracketscount === Closedbracketscount){
//         return true ;
//     }
    
// }
// return false
// }
// console.log(bracketsarebalanced("{(}"))







//  find duplicatevalue 


// let arr = [4,5,7,4,6,5];
// function findduplicatevalue(arr){
//     let duplicate = []
//     let obj ={}

//     for(let i = 0 ; i<arr.length ; i++){
//         if(obj[arr[i]]){
//             duplicate.push(arr[i])
//         }
//         obj[arr[i]] = true
//     }
//     return duplicate;

// }
// console.log(findduplicatevalue(arr))





// remove duplicates

// let arr = [4,5,7,4,6,5];
// function removeduplicates(){
//     let unique = []
//     let obj = {}

//     for(let i = 0 ; i< arr.length ; i++){
//         if(!obj[arr[i]]){
//             unique.push(arr[i]);
//         }
//         obj[arr[i]]  = true;
//     }
//     return unique;

// }
// console.log(removeduplicates());




// 2 sum problem
// which pairs of 2 numbers in an array first retun us sum 0 or any targated value check this out
// let arr = [4,2,-4,1,5,6]
// let target =  7;


// function twosum(arr, target){
//     for(let i = 0 ; i<arr.length -1 ; i++){
//         for(let j = i+1 ; j<arr.length  ; j++ ){
//             if (arr[i] + arr[j] === target){
//                 return [arr[i] , arr[j]];
//             }
//         }

//     }
//     return null;
// }
// console.log(twosum(arr,7));




// largest number in an array;
// let arr = [1,4,5,9,5,6,9,11,4,5,16];
// let largestnum = 0;

// function largestnumber(){
//     for(let i = 0 ; i< arr.length ; i++){
//         if(arr[i] > largestnum){
//             largestnum = arr[i];
//         }
//     }
//     return largestnum;
// }
// console.log(largestnumber());


// solution 2 

// let arr = [1,4,5,9,5,6,9,11,4,5,16];
// arr.sort((a,b)=>a-b)
// // console.log(arr)

// let lastindex = arr.length - 1;
// let lastelem = arr[lastindex]
// console.log(lastelem)





// occurence of every charcter in a string 
// let str = "abcdssads"

// function checkoccurence(str){
//     const obj = {};

// for(let char of str){
//     obj[char] = (obj[char] || 0) +1;
// }
// let max = 0
// let character = str[0]
// for(let k in obj){
//     if(obj[k]> max){
//         max = obj[k]
//         character = k;
//     }
// }
// return {character, max};



// }
// console.log(checkoccurence(str));


// once more

// let str = "abcsggsa";

// function countoccurence(){
//     const obj = {}
//     for(let char of str){
//         obj[char] = (obj[char] || 0) + 1 ;
//     }
//     let max = 0;
//     charcter = str[0];
//     for(let k in obj){
//             if(obj[k]> max){
//                 max = obj[k];
//                 charcter = k;
//             }
//     }
//     return {charcter, max};
// }

// console.log(countoccurence());




// reverse an array
// let arr = [1,2,3,4,5,6]
// let reverse = []
// // // output = [6,5,4,3,2,1];
// // arr.reverse()
// // console.log(arr);

// function reversearray(arr){

//      for(let i = arr.length -1 ; i >= 0  ; i-- ){
//         reverse.push(arr[i])
//      }

//     return reverse;

// }
// console.log(reversearray(arr));



// revrese a string 
// let str = "abcd";
// // let revstr = '';

// // function reversethestring(){
// //     for (let i = str.length - 1; i>= 0; i--){
// //         revstr += str[i];
// //     }
// //     return revstr
// // }
// // console.log(reversethestring());


// // method 2 

// let newstr = str.split("").reverse().join("");
// console.log(newstr)


// palindrom string

// just check with the reverse of the str or array


// anagram 
// const str = "my name is eamn"

// output = " name and eamn are anagrams "


// Write a program to print below pattern using nested loop 

// 54321
// 5432
// 543
// 54
// 5


//     for(let i = 5 ; i >= 1; i--){
//         for(let j = 5 ; j >=1 ; i++ ){
//             console.log(j)
//         }
    
// }

// Q. Program to find two largest number in an array.  [12,16,78,95,25,2,67,89]
// let arr = [12,16,78,95,25,2,67,89]
// function twolargest(arr ){
// let max = 0;
//  let secondmax = 0;
// for(let nums in arr){
//     if(arr[nums]> max ){
//         secondmax = max;
//         max = arr[nums]
//     }else if (nums > secondmax && nums !== max){
//             secondmax = arr[nums]
//     }
//     }
//     return {max, secondmax}
    
// }


// console.log(twolargest(arr));




// anagram
// without sorting  
// let str1 = "ratlam"
// let str2 = "maralt"

// function findanagarams(){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let obj = {}
//     for(let char in str1){
//         obj[char] = (obj[char] || 0 ) +1 ;

//         console.log()
//     }
    

    

// }
// findanagarams()
let  a= prompt("enter your number:")
let b = prompt("enter yout number :");
let c  = parseInt(a)+ parseInt(b);
let d = a*b;
let e = b-a;
 console.log(e,c,d);