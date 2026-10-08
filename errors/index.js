function checkAge(age){
    if (age < 18){
        throw new Error("Too young")
    }else{
        console.log("All good")
    }

    console.log("Okay, go ahead")
}





try {
    checkAge(19)
    console.log("try")
} catch (e){
    console.log("catch", e.message)
}finally{
    console.log("finally")
}



// console.log("still works")