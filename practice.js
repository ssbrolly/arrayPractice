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

// cars.forEach(car => {
//     console.log(car.brand);
// })

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i].brand);
// };

// cars.filter(car => {
//     console.log(car.brand);
// });

// const showBrand = function() {
//     cars.forEach(car => {
//         console.log(car.brand);
//     });
// };
// showBrand();

// function showBrand(car) {
//     for (let i = 0; i < car.length; i++) {
//         console.log(car[i].brand);
//     };
// };
// showBrand(cars);


// 2. filter all cars that were built after year 2000

// const filteredCars = cars.filter(car => car.year > 2000);
// console.log(filteredCars);

// cars.forEach(car => {
//     if (car.year > 2000){
//         console.log(car);
//     };
// });

// let filteredCars = function(car) {
//     for (let i = 0; i < car.length; i++) {
//         if (car[i].year > 2000) {
//             console.log(car[i]);
//         };
//     };
// };
// filteredCars(cars);

// function filteredCars(car) {
//     car.forEach(cur => {
//         if (cur.year > 2000) {
//             console.log(cur);
//         };
//     });
// };
// filteredCars(cars);

// 3. count the number of cars that were built on or before year 2000 (hint:  reduce)

// let reducedCars = cars.reduce((total, car) => {
//     if (car.year > 2000) {
//         total++;
//     };
//     return total;
// }, 0);
// console.log(reducedCars);

// let total = 0;
// cars.forEach(car => {
//     if (car.year > 2000) {
//         total++
//     };
// });
// console.log(total);

// 4. Grab just 'model' and 'year' of the cars that were built after year 2000 and save into a new array

// let newArr = [];
// cars.forEach(car => {
//     if (car.year > 2000) {
//         let newObj = {
//             model: car.model,
//             year: car.year,
//         };
//         newArr.push(newObj);
//     };
// });
// console.log(newArr);

// let filteredCars = cars.filter(car => {
//     return car.year > 2000;
// }).map(car => {
//     return {
//         model: car.model,
//         year: car.year,
//     };
// });
// console.log(filteredCars);


//5. sort the cars array by model name in ascending order
// hint:  make case insensitive.  4th item "camry" has lower case.  Make sure the sort results in correct ascending order ignoring the case.
cars.sort((a, b) => {
    if (a.model.toLowerCase() < b.model.toLowerCase()) {
        return 1;
    } else {
        return -1;
    };
});

console.log(cars);



// 1. filter arr to only contain even numbers and save into new array.
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//     arr.push(i);
// };

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

