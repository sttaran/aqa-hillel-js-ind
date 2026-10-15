const countFrom = (num) =>{
    let i = num

    return ()=>{
        console.log(i)
        i++
    }
}


const count = countFrom(5)

count()
count()
count()
count()
count()