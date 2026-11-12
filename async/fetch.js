// GET
async function fetchPostById(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await response.json()
    return json 
  } 


  // POST
  async function createPost(data){ 
    const requestOptions = { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
}

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    const json = await response.json()
    return json 
  }



  const requestBody = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }


  const response = await createPost(requestBody)
  console.log(response)