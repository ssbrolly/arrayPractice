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
//   console.log(car.model);
// });

// 2. filter all cars that were built after year 2000
// cars.forEach(car => {
//   if (car.year > 2000) {
//     console.log(car.brand);
//   };
// });


// 3. count the number of cars that were built on or before year 2000 (hint:  reduce)
// let count = '';
// cars.forEach(car => {
//   if (car.year <= 2000) {
//     count++;
//   };
//   return count;
// });
// console.log(count);

let count = cars.reduce((total, car) => {
	if (car.year <= 2000) {
		total++;
	};
	return total;
}, 0);

console.log(count);


// 4. Grab just 'model' and 'year' of the cars that were built after year 2000 and save into a new array
// let newCars = [];

// cars.forEach(car => {
// 	if (car.year > 2000) {
// 		let carObject = {
// 			model: this.model,
// 			year: this.year,
// 		};
// 		newCars.push(carObject);
// 	};
// });
// console.log(newCars);



//5. sort the cars array by model name in ascending order
// hint:  make case insensitive.  4th item "camry" has lower case.  Make sure the sort results in correct ascending order ignoring the case.




// 1. filter arr to only contain even numbers and save into new array.
// 2. construct a new array that only contains numbers 1 through 50.

// let arr = [];
// for(let i=2; i<=100; i+=2 ) {
//     console.log(i);
// };


