// const students = ["Marina", "Stas"];
// const list = new Array(10, "Marina")

// // Using Array.from to create and pre-fill an array with values
// const filledArray = Array.from({ length: 5 }, (_, index) => index); // [0, 1, 2, 3, 4]

// console.log(students)
// console.log(list)
// console.log(filledArray)




// console.log(students[0])
// console.log(students[1])
// console.log(students.length)


// const name = "Marina"
// name[3] = "y"

// const students = ["Marina", "Stas"];


// students[1] = "Pablo"

// // console.log(students[students.length - 1])
// console.log(students[-1])
// console.log(students.at(-1))


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];

// console.log(matrix[0][1])
// console.log(matrix[1][2])

// const students = ["Marina", "Stas"];


// for(let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }


// for (const student of students) {
//     console.log(student)
// }


// let studentName = "Pablo"
// const studentName1 = studentName // "Pablo"

// studentName = "Stas"

// console.log(studentName)
// console.log(studentName1)


// const students = ["Marina", "Stas"];
// const studentsCopy = structuredClone(students)

// students[1] = "Pablo"

// console.log(students)
// console.log(studentsCopy)





// const students = ["Marina", "Stas"];

// function foo(students){
//         students[0] = Date.now()
// }

// foo(students)

// console.log(students)


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(n => n * 2)

// console.log(doubledNumbers)

// const myFruits = "яблуко банан полуниця"


// const fruits = myFruits.split(" ")
// console.log(fruits)

// const fruitString = fruits.join(", ");
// console.log(fruitString); // "яблуко, банан, полуниця"


// const numbers = [10, 20, 30, 40, 50];
// // const index = numbers.indexOf(100);
// // console.log(index); // 2


// if (numbers.indexOf(100) == -1) {
//     console.log("no 100")
// }


// const fruits = ["яблуко", "банан", "полуниця"];

// const lastFruit = fruits.pop()


// console.log(lastFruit)
// console.log(fruits)


// const fruits = ["яблуко", "банан", "полуниця"];

// const firstFruit = fruits.shift()


// console.log(firstFruit)
// console.log(fruits)

// fruits.unshift("Sliva")

// console.log(fruits)


// const numbers = [1, 2, 3, 4, 5];

// const slicedArray = numbers.slice(1, -1); 

// console.log(slicedArray)



// const colors = ["червоний", "зелений", "синій"];

// const colorsCopy = structuredClone(colors)
// colorsCopy.splice(1, 1, "жовтий", "оранжевий");
// colorsCopy.log(colors)



/// methods

// const colors = ["червоний", "зелений", "синій"];

// colors.forEach((color)=> console.log(color.toUpperCase()))

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((n) => n % 2 === 0)
// console.log(evenNumbers)


// const colors = ["red", "green", "blue"];
// const myColor = colors.find((c) => c.includes("e"));
// console.log(myColor)


// const colors = ["red", "green", "blue"];
// const upperColors = colors.map( c => c.toUpperCase())
// console.log(colors)
// console.log(upperColors)


// const numbers = [9, 3, 2, 3, 4, 5];
// console.log(numbers.sort())

// const colors = ["ared", "Ared", "green", "blue"];
// console.log(colors.sort())

// const numbers = [11, 10, 2, 1, 4, 5];
// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))



// const numbers = [11, 10, 2, 1, 4, 5];


// const sum = numbers.reduce((acc, num)=> acc + num, 0)

// console.log(sum)



const nums = [1, 2, 3, 4, 5]

const newArr = nums.map((el, i) => el * i)