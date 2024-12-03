// Problem__1


  function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
   
  }
  
  console.log(celsiusToFahrenheit(0)); 
  console.log(celsiusToFahrenheit(25)); 
 


//   ***

// Problem__2


function isEven(num) {
    return num % 2 ===0 ;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false


//   ***

// Problem___3

function sum(a, b) {
    return a + b ;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30


//   ***
  
// Problem__4
  
// function findSmallestNum(arr) {
//      return arrMath.min()
//   }
  
//   console.log(findSmallestNum([3, 5, 1, 9])); // 1
//   console.log(findSmallestNum([-1, -5, 0, 10])); // -5



// ***

  // Problem__6


  function getFirstElement(arr) {
    return arr.at(0);
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"



// ***

  // Problem___7
  
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false



  // ***

  // Problem___8



  // function factorialize(num) {
  //   if (num === 0 || num === 1) return 1;
  //   return (num-1) * num;
  // }
  
  // console.log(factorialize(5)); // 120
  // console.log(factorialize(7)); // 5040
  







  // ***

  // Problem___9


  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"



  
  // ***

  // Problem___10

  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"




   // ***

  // Problem___11


  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5




  // ***

  // Problem___12


  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);;
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  
  



  // ***

  // Problem___13


  function getLastElement(arr) {
    return arr.pop();
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  
  
  

  // ***

  // Problem___14


  function getFirstCharacter(str) {
    return str.charAt();
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  
  

  
  // ***

  // Problem___15


  function sumArray(arr) {
      return arr.reduce((accumulator,current) => {
        return accumulator + current;
      })
    };
  
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  