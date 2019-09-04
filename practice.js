const cars = [
    {brand:'Hyundai', model:'Sonata', year:'2000',type:'Sedan'},
    {brand:'Hyundai', model:'Azera', year:'1982',type:'Sedan'},
    {brand:'BMW', model:'M3', year:'2015',type:'Coupe'},
    {brand:'Toyota', model:'camry', year:'2017',type:'Sedan'},
    {brand:'Hyundai', model:'Genesis', year:'2011',type:'Coupe'},
    {brand:'Toyota', model:'Highlander', year:'1970',type:'SUV'},
    {brand:'Honda', model:'Accord', year:'2018',type:'Sedan'},
    {brand:'Honda', model:'Pilot', year:'2015',type:'SUV'},
    {brand:'Nissan', model:'Pathfinder', year:'1999',type:'SUV'},
    {brand:'Nissan', model:'Maxima', year:'2016',type:'Sedan'}
  ];

// 1. console.log all the brand names contained in the cars array


// 2. filter all cars that were built after year 2000


// 3. count the number of cars that were built on or before year 2000 (hint:  reduce)


// 4. Grab just 'model' and 'year' of the cars that were built after year 2000 and save into a new array


//5. sort the cars array by model name in ascending order
// hint:  make case insensitive.  4th item "camry" has lower case.  Make sure the sort results in correct ascending order ignoring the case.



// let newArr = arr.filter(num => {
//     return num % 2 === 0;
// });
// console.log(newArr);

// function arrNew() {
//     let arr = [];
//     for (let i = 0; i <= 100; i++) {
//         arr.push(i);
//     };
//    return arr.filter(num => num % 2 === 0);
    
// };
// console.log(arrNew());

// arr.splice(50, 50);
// console.log(arr);

// let evenArr = [];
// for (let i = 2; i <= 100; i += 2) {
//     evenArr.push(i);
// };
// console.log(evenArr);

// 2. construct a new array that only contains numbers 1 through 50.
// let arr = [];
// for (let i = 1; i <= 50; i++) {
//     arr.push(i);
// };
// console.log(arr);




// Challenge 1: Add all numbers
// return a sum of all parameters regardless of the amount of numbers - NO arrays

// // solution 1 - es5 argument & for loop
// function addAll() {
// 	var args = Array.prototype.slice.call(arguments);
// 	var total = 0;
// 	for (let i = 0; i < args.length; i++) {
// 		total += args[i];
// 	};
// 	return total;
// };

// solution 2 - ...rest & reduce/forEach

// function addAll(...rest) {
//     return rest;
// }


// console.log(addAll(1, 2, 3, 4, 5, 6));

// explaination of ...rest
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// arr1.push(...arr2);

// function addAll() {
// 	let total = 0;
// 	arr1.forEach(number => {
// 		total += number;
// 	});
// 	return total;
// };
// console.log(arr1.sort());



//Es 6 Methods

// const firstName = 'John';
// const lastName = 'Smith';

// const n = `${firstName} ${lastName}`;

// //New mthods are case sensitive
// console.log(n);
// console.log(n.startsWith('J'));
// console.log(n.endsWith('ith'));
// console.log(n.includes(' '));
// console.log(`${n} `.repeat(5));


// function Person(name) {
//     this.name = name;
// };

// const friends = ['John', 'Jane', 'Dick', 'Mike'];

// Person.prototype.myFriends = (friends) => {
//     const arr = friends.map(el => `${this.name} is friends with ${el}`);
//     console.log(arr);
// };

// new Person('Ike').myFriends(friends);


//DESTRUCTURING
// const john = ['John', 20]

// const [name, age] = john;
// console.log(`${name} ${age}`);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith',
// };

// const {firstName, lastName} = obj;
// console.log(`${firstName} ${lastName}`);


// function calcAgeRrtirement(year) {
//     const age = new Date().getFullYear() - year;
//     const retirement = 65 - age;
//     return [age, retirement];
// };

// const [age, retirement] = calcAgeRrtirement(1979);
// console.log(age, retirement);


//FOR OF LOOP

// const boxes = [1, 2, 3, 4, 5, 6]

// for (const cur of boxes) {
//     if (cur === 3) {
//         continue;
//     }
//     console.log(cur);
// };

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// let ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// const fullAgeIndex = [];

// const age = ages.map((el, index) => {
//     if (el <= 18) {
//         return el;
//     };
// });
// console.log(age);




















































