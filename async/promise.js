// const validateAge = (age) => new Promise(
//     (resolve, reject)=>{
//        if (age >= 18){
//         resolve(true)
//        }

//        reject(false)
//     }
// )


// const res = validateAge(18)
//     .then((result)=> console.log(result))
//     .catch(e => console.log(e))



// try {
//     const res = await validateAge(18)
//     console.log(res)
// }catch (e){
//     console.log(e)
// }


 async function fetchPostById(id){
    const response = await 
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);  
  
    const json = await response.json()  
    return json 
  } 

// const post1 = await fetchPostById(1)
// const post2 = await fetchPostById(2)
// const post3 = await fetchPostById(3)


// const [post1, post2, post3] = await Promise.all([
//         fetchPostById(1),
//         fetchPostById(2),
//         fetchPostById(3)
// ])

// console.log(post2)

// const posts = await Promise.allSettled([
//         fetchPostById(1),
//         fetchPostById(2),
//         fetchPostById(3)
// ])
// console.log(posts)


// const fastestPost = await Promise.race([
//         fetchPostById(1),
//         fetchPostById(2),
//         fetchPostById(3)
// ])
// console.log(fastestPost)


// const result = await Promise.any([
//         fetchPostById(1),
//         fetchPostById(2),
//         fetchPostById(3)
// ])
console.log(result)