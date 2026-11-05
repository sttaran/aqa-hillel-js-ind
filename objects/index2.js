// const user = {
//         name: "Stas",
//         address: {
//             city: "Dnipro"
//         }
// }



// const keys = Object.keys(user)
// console.log(keys)

// const values = Object.values(user)
// console.log(values)


// const values = Object.entries(user)
// console.log(JSON.stringify(values, null, 2))



// for (const entry of Object.entries(user)) {
//     console.log(entry[0])
//     console.log(entry[1])
//     console.log("----------------")
// }


// const people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Mike", age: 40 }
// ];

// people.push({ name: "Stas", age: 22 })

//  console.log(people)


//  for (const person of people) {
//     const {name} = person

//      console.log(name)
//  }

// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers)



// const user = {
//         name: "Stas",
//         address: {
//             city: "Dnipro"
//         }
// }


// const userFromDB = {
//         name: "Stanislav",
//         age: 30
// }


// const newUser = {
//     ...user,
//     ...userFromDB,
//     verified: true,
//     status: "Admin"
// }

// console.log(newUser)


// const copiedUSer = structuredClone(newUser)



// function printUserInfo(name, age, gender, occupation) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Gender: ${gender}`);
//   console.log(`Occupation: ${occupation}`);
// }


// printUserInfo("Stas", 20, "male", "Married")

function printUserInfo(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Gender: ${user.gender}`);
  console.log(`Occupation: ${user.occupation}`);
}



const user = {
  age: 30,
  name: "John",
  gender: "male",
  occupation: "developer"
}


printUserInfo(user);