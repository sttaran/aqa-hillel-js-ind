
// console.log(1)
// setTimeout(()=>console.log(2), 1)
// console.log(3)



// setTimeout(()=>console.log(1), 1)
// setTimeout(()=>console.log(2), 3)
// setTimeout(()=>console.log(3), 2)


// let posts = null

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => {
//     // console.log("json", json)
//     posts = json

//     // expext(json).toBe()
//   })

//   console.log(posts)



  /// newest 
 async function fetchPostById(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await response.json()
    return json 
  } 


  const post = await fetchPostById(1)
  console.log(post)