//? 1.define a Class with properties and methods
// class Car {
//   constructor(model, name) {
//     this.model = model;
//     this.name = name;
//   }
//   start() {
//       console.log(`name of the car:${this.name}`);
//       console.log(`model number of the car:${this.model}`)
//   }
// }
// bmw = new Car(620, "Sports Edition");
// bmw.start();

//? 2.implementation of class inheritance
// class Car {
//   constructor(model, name) {
//     this.model = model;
//     this.name = name;
//   }
//   start() {
//     console.log(this.name);
//   }
//   end() {
//     console.log("car stopped");
//   }
// };

// class electricCar extends Car {
//   dashboard() {
//     console.log("child method");
//   }
//   start() {
//     super.start(); //inherit properties from parent so we are using "super" keyword
//     super.end();
//     this.dashboard(); //inherit properties from the same class so we are using "this" keyword
//   }
// };

// evCar = new electricCar("Tesla", "A320");
// evCar.start();

//? 3.find duplicate element in array
// const duplicatedArray = [14, 6, 6, 14, 56, 87, 14, 41, 6, 78, 6];
// const duplicates = duplicatedArray.filter((element, index, arr) => arr.indexOf(element) !== index);
// console.log(duplicates);

//? 4.count the duplicates in array
// const months = [
//   "jan",
//   "feb",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "june",
//   "sept",
//   "oct",
//   "dec",
//   "jan",
//   "jan",
//   "dec",
//   "oct",
// ];

// const countDuplicates = months.reduce((obj, month) => {
//   if (obj[month] == undefined) {
//     obj[month] = 1;
//     return obj;
//   } else {
//     obj[month]++;
//     return obj;
//   }
// }, {});
// console.log(countDuplicates);

//? 5.check if a given number is string or not
// const validateValue = "sayantan";
// console.log(isNaN(validateValue));

//? 6.difference between object.freeze() and const
// let person = {
//     name: "sayantan das"
// }
// Object.freeze(person);
// person.name = "rashid";
// console.log(person);

//? 7.sort a number array
// const arr = [11, 19, 77, 58, 42, 98];
// const sortedArr = arr.sort((a, b) => {
//     return a - b;  //output will be in ascending order
//     return b - a;  //output will be in descending order
// });
// console.log(sortedArr);

//? 8.sort a given array of strings
// const arr = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
// console.log(arr.sort());

//? 9.find unique values in an array
// const arr = [12, 4, 5, 7, 8, 5,
//     7, 8, 8, 8, 8];
// const newArr = arr.filter((element, index, arr) => arr.indexOf(element) == index);
// console.log(newArr);

//? 10.find unique values from an array in sorted order
// const arr = [12, 78, 54, 96, 587, 1, 0, 56,12,78];
// const sortedArr = arr.filter((element, index, arr) => arr.indexOf(element) == index);
// console.log(sortedArr);
// sortedArr.sort((a, b) => {
//     return a - b;
// });
// console.log(sortedArr);

//? 11.find out maximum value in a numbered array
// const arr = [5, 45, 54, 63, 87, 78, 98, 102, 500004, 0];
// function findMaxValue(arr) {
//     return arr.reduce(function (prev, curr) {
//         return prev > curr ? prev : curr;
//     })
// };
// console.log(findMaxValue(arr));

//? 12.spread operator
// let arr1 = [1, 4, 5, 7, 8, 9, 6, 3, 2, 5, 8];
// let arr2 = [9, 8, 7, 6, 3, 2, 5, 8];
// let combo = [...arr1, ...arr2];
// console.log(combo);

// function readData(a, b, ...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// readData(...arr1);

//? 13.different datatypes in javascript
// var tax = 48.67;
// var isActive = false;
// var salary;
// var isTaxable = null;
// let city = "Bengaluru";
// console.log(salary);
// console.log(city);
// console.log(isTaxable);
// console.log(isActive);

//? 14.ways to create object in javascript
// let obj = {
//   name: "rashid",
//   role: "developer",
//   job: function H() {
//     return "hello";
//   },
// };
// console.log(obj.job());

//? 15.purpose of "this" operator in js
// class c1 {
//   tax = 10;
//   calculateTax() {
//     console.log("tax is" + this.tax);
//     console.log("this is function 1");
//   }
//   readCredentials() {
//     this.calculateTax();
//     console.log("this is function 2");
//   }
// }

//? 16.typeOf operator
// var tax = "true";
// console.log(typeof tax);

//? 17.difference between "==" and "==="
// var tax = 10;
// var taxStr = "10";
// if (tax == taxStr) {
//   console.log("values are matching");
// } else {
//   console.log("values are not matching");
// }

//? 18. output of 13+6+"2";
// console.log(13 + 6 + "2"); //192
// console.log(13 + 6 - "2") //17
// console.log(13 + 6 * 2); //25
// console.log(6 / 2 + 13); //16

//? 19.null in js
// var s = null;
// console.log(typeof (s));

//? 20.how to detect client's operating system
// console.log(navigator.vendor);
// console.log(navigator.platform);
// console.log(navigator.product);
// console.log(navigator.productSub);
// console.log(navigator.permissions);
// console.log(navigator.appName);
// console.log(navigator.appVersion)
// console.log(navigator.appCodeName);

//? 21.of what javascript type is an array
// type of an Array is always an Object
// var arr = [15, 78, 3, 5, 8, 9, 66, 5, 4, 7, 8, 9];
// console.log(typeof (arr));
// var arr1 = ["hello", "hii", "world"];
// console.log(typeof (arr1));

//? 22.property that tells you the length of the array
// var arr = [1, 8, 7, 9, 6, 5, 8, 7, 8, 96, 3, 2, 5, 8, 9, 9];
// console.log(arr.length);

//? 23.what does array.shift() method return
//it removes the first element from the array and returns the element
// var arr = ["hello", "hii", "world"];
// console.log(arr.length); //3
// var arr1 = arr.shift();
// console.log(arr1);  //hello
// console.log(arr);  //["hii","world"]

//? 24.array.push() method
//it adds a new element to the end of the array
// var arr = ["hello", "hii", "world"];
// console.log(arr.length);
// arr.push("sayantan das");
// console.log(arr);
// console.log(arr.length);

//? 25.array.pop() method
//it removes the last element fro the end of the array
// var arr = ["hello", "hii", "world"];
// console.log(arr.length) //3
// console.log(arr.pop());
// console.log(arr);

//? 26.array.unshift() method
// it adds a new element to the beginning of the array
// var arr = ["hello", "hii", "world"];
// console.log(arr.unshift("sayantan das"));
// console.log(arr);
// console.log(arr.length);

//? 27.explain template literals
//template literals are strings with embedded inside them.template literals allows us concatenation and interpolation in much more clear and easy way
// let city = "silicon valley";
// let country = "USA";
// let combi = `onsite location is ${city} in ${country}`;
// console.log(combi);

//? 28.output of the following code
// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y); //output will be 1undefined

//? 29.what is NaN and what is its type
// the NaN property stands for not a number and believe it or not it its type is Number

// console.log(typeof NaN); //number
// console.log(typeof NaN == "number"); //true
// console.log(typeof NaN == NaN); //false

//? 30.output of the code
// function foo1()
// {
//   return {
//     bar: "hello",
//   };
// }

// function foo2()
// {
//     return
//     {
//     bar: "hii",
//   };
// }
// console.log(foo1()); {bar:"hello"}
// console.log(foo2());  //it will show undefined cause the curly braces are starting from the next line not after return

//? 31.output of the code
// console.log(false == "0"); //true
// console.log(false === "0");  //false cause along with valuation it will check the datatypes also and here false is boolean and 0 is number

//? 32.output of the code
console.log(1 < 2 < 3); //true, here as well 1<2 is true which returns the value 1 and 1<3 so it is true and hence the overall output becomes true
console.log(3 > 2 > 1); //false cause 3>2 is true and as we know false=0 and true=1 so 1>1 this condition becomes false and hence the output becomes false

//? 33.word is anagram or not
let str1 = prompt("enter a string");
let str2 = prompt("enter a string");

let a = str1.split("").sort().join("");
let b = str2.split("").sort().join("");

if (a == b) {
    console.log("this is an anagram")
} else {
    console.log("this is not an anagram")
};

