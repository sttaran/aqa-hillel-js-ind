

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")


// for (let i = 0; i <= 10; i++){
//         console.log(i)
// }


// for (let i = 0; i <= 10; i++){
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

const str = "Hello World"

// for (let i = 0; i < str.length; i++){
//     const char = str[i]

//     if (char === char.toUpperCase() && char.trim()){
//         console.log(char)
//     }
// }


// for (let i = 0; i < str.length; i++){
//     const char = str[i]

//     if  (!char.trim()){
//         break
//     }

//     if (char === char.toUpperCase()){
//         console.log(char)
//     }
// }

for (let i = 0; i < str.length; i++){
    const char = str[i]

    if  (char == 'o'){
        continue
    }

    console.log(char)
}