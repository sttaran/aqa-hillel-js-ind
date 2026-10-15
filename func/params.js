// function greet(name = "User") {
// 	console.log(`Hello, ${name}!`);
// }

// greet("Marina")
// greet()
// greet(undefined)


// function printBookInfo(title, author = "Unknown", year) {
// 	console.log(`title - ${title}, author - ${author}, year - ${year}`)
// }

// printBookInfo("Winter", "Scott", 1924)
// printBookInfo("Spring",undefined, 1999)


// function sum(num1, num2){
//    return num1 + num2
// }

// function sum (...nums){
//     let sum = 0;  

// 	for (let i = 0; i < nums.length; i ++){
//         sum += nums[i]
//     }

// 	return sum;
// }

// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(1, 2, 3))





// function printStudentRating (name, ...num){
//     let sum = 0;  

// 	for (let i = 0; i < nums.length; i ++){
//         sum += nums[i]
//     }

//     const rating = sum / nums.length

// 	console.log(`rating ${name} - ${rating}`)
// }

// printStudentRating("Askold", 4.5, 5, 4, 3)
// printStudentRating("Lia", 5, 5, 4, 5)



// function printStudentRating (){
//     let sum = 0;  

// 	for (let i = 1; i < arguments.length; i ++){
//         sum += arguments[i]
//     }

//     const rating = sum / arguments.length

// 	console.log(`rating ${arguments[0]} - ${rating}`)
// }

// printStudentRating("Askold", 4.5, 5, 4, 3)
// printStudentRating("Lia", 5, 5, 4, 5)





// const userName = 'Anna';

// function showMessage() {
//     const userName = "Lia"
// 	console.log(`Hello ${userName}`); // використовується зовнішня змінна  - userName
// }

// showMessage(); // Hello, Anna



function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
  } else if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
  } else {
    console.log("Операція зняття коштів проведена успішно");
  }
}

function withdraw(amount, balance) {
    if (amount > balance) {
        console.log("Недостатньо коштів на рахунку");
        return
    }

    if (amount === 0) {
        console.log("Для проведення операції введіть суму більшу за нуль");
        return 
  }

    console.log("Операція зняття коштів проведена успішно");

}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"