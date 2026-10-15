// function printGreeting(name){
//     console.log(`Hello ${name}`)
// }


// printGreeting("Marina")
// printGreeting("Stas")


// function isAdult(age){
//    return age >=18
// }

// const stageAge = 30
// const isStasAdult = isAdult(stageAge)
// console.log(isStasAdult)



// function declaration
function sum(num1, num2){
   return num1 + num2
}


// function expression
const sum2 = function(num1, num2){
    return num1 + num2
}


// arrow func
const sum3 = (num1, num2) => {
    return num1 + num2
}

// concise arrow func
const sum4 = (num1, num2) => num1 + num2
 




console.log(sum(1,2))
console.log(sum2(1,2))
console.log(sum3(1,2))
console.log(sum4(1,2))

