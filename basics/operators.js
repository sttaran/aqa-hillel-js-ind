// OR
// If first value is true or can be converted to true, it will be returned. Otherwise, the second value will be returned.
// const a = true || false
// const a = false || true


// const a = false || 10
// const a = null || 10
// console.log(a); 

// AND
// If first value is false or can be converted to false, it will be returned. Otherwise, the second value will be returned.


// const b = true && false
// const b = false && true

// console.log(b);


// const age = 10;
// let gennder = "male";


// if (age > 18 && gennder === "male") {
//     console.log("You are an adult male.");
// }


// nullish coalescing operator (??)
// If first value is not null or undefined, it will be returned. Otherwise, the second value will be returned.

// const c = "asdasd" ?? 10
// console.log(c)


// const age = 18;

// // const text = age >=18 ? "You are an adult." : "You are a minor.";
// // console.log(text);

// let text;

// if (age >= 18) {
//     text = "You are an adult.";
// } else {
//     text = "You are a minor.";
// }

// console.log(text);

// const age = "18";

// console.log(Number(age)); // true
// console.log(+age); // true


const radius = 5;
const area = Math.PI * Math.pow(radius, 2);