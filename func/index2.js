const multiply = (num1, num2) => {}


function processPayment(paymentSum, onSuccess, onFailure) {
    if (paymentSum <=0) {
        onFailure(paymentSum)
        return
    }

    onSuccess(paymentSum)
    
}



// const printPaymentSuccess = (paymentSum) =>{
//     console.log(`Payment ${paymentSum} is successful`)
// }

// const printPaymentFailure = (paymentSum) =>{
//     console.log(`Payment ${paymentSum} failed`)
// }


// processPayment(-10.5, printPaymentSuccess, printPaymentFailure)




// processPayment(
//     -10.5, 
//     (paymentSum) =>{
//     console.log(`Payment ${paymentSum} is successful`)
//     }, 
//     (paymentSum) =>{
//         console.log(`Payment ${paymentSum} failed`)
//     }
// )


// const isPositive = (n) => n > 0
// const positive = [1, -1, 0, 2, -6].filter((n) => n > 0)


const multiplyBy = (num) => {
    return (num2) => num2 * num
}


const double = multiplyBy(2)

// console.log(double(1))
// console.log(double(2))
// console.log(double(5))

const triple = multiplyBy(3)

console.log(triple(1))
console.log(triple(2))
console.log(triple(5))