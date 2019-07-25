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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let canDrink = ages.filter(age => {
//     if (age >= 21) {
//         return true;
//     }
// })

// console.log(canDrink);

// let sedan = cars.filter(car => {
//     if (car.type === 'Sedan') {
//         return car;
//     }
// }).map(car => {
//     return car.brand;
// });
// console.log(sedan);

// Eighties Company

// let eightiesCompany = companies.filter(com => (com.start >= 1980 && com.start < 1990));
// console.log(eightiesCompany);

// Get companies that lasted 10 years or more

// let lastedCompany = companies.filter(com => (com.end - com.start >= 10));
// console.log(lastedCompany);


// .map()
// Create array of company names;

const assign = function() {
    companies.forEach(com => {
        const ages = com.end - com.start;
        console.log(`${com.name} is ${ages} years old`);
    });
}
assign();

// const compArray = companies.map(com => `${com.name} [${com.start} - ${com.end}]`);
// console.log(compArray)

// const agesSquare = ages.map(com => Math.round(Math.sqrt(com)));
// console.log(agesSquare); 


// .sort()

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ?  1 : - 1);

// const sortedCompanies = companies.sort((a, b) => {
//     if (a.start > b.start) {
//         return -1
//     } else {
//         return 1
//     }
// })

// console.log(sortedCompanies);


// .reduce()

// Add all the numbers together in the ages array

// let total = 0;
// ages.forEach(age => {
//     return total += age
// })
// console.log(total);

// const totalAges = ages.reduce((total, age) => {
//     return age + total;
// }, 0);
// console.log(totalAges);

// total = 0;
// const companyYears = companies.forEach(com => {
//     return total += (com.end - com.start);
// })

// const companyYears = companies.reduce((total, com) => {
//     return total + (com.end - com.start);
// }, 0)

// console.log(companyYears);

























































