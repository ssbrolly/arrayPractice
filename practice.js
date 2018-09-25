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

// // 1. console.log all the brand names contained in the cars array
// cars.forEach(car => {
//     console.log(car.brand);
// });


// // 2. filter all cars that were built after year 2000
// cars.forEach(car => {
//     if(car.year > 2000) {
//         console.log(car.year);
//     };
// });

// function filterCars(car) {
//     return car.year > 2000;
// };
// console.log(cars.filter(filterCars));



// // 3. count the number of cars that were built on or before year 2000 (hint:  reduce)
// let count = 0;
// cars.forEach(car => {
//     if(car.year <= 2000) {
//         count++;
//     };
// });
// console.log(count);

// let count1 = cars.reduce((total, car) => {
//     if(car.year <= 2000){
//         total++;
//     };
//     return total;
// }, 0);
// console.log(count1);

// function oldCars(total,car) {
//     if(car.year <= 2000) {
//         total++;
//     };
//     return total;
// };

// console.log(cars.reduce(oldCars, 0));



//  // 4. Grab just 'model' and 'year' of the cars that were built after year 2000 and save into a new array

// let modelYear = [];
// cars.forEach(car => {
//     if(car.year > 2000) {
//         let modelYearObject = {
//             model: car.model,
//             year: car.model,
//         };
//         modelYear.push(modelYearObject);
//     };
// });

// console.log(modelYear);

// let newModel = cars.map(car => {
//     if(car.year > 2000) {
//         let object = {
//             model: this.model,
//             year: this.year,
//         };
//         return object
//     };
// });
// console.log(newModel);

// let newerModel = cars.filter(car => {
//     return car.year > 2000;
// }).map(car => {
//     return {
//         model: car.model,
//         year: car.year,
//     };
// });
// console.log(newerModel);



//  5. sort the cars array by model name in ascending order
  // hint:  make case insensitive.  4th item "camry" has lower case.  Make sure the sort results in correct ascending order ignoring the case.
cars.forEach(car => {
    car.sort();
    console.log(car.model);
})




// 1. filter arr to only contain even numbers and save into new array.
// 2. construct a new array that only contains numbers 1 through 50.

